import React, { useState } from 'react';
import defaultImage from './Assets/w.png'; // Import your default image
import loading_spinner from './Assets/loader-removebg-preview.png'; // Import loading spinner image

function NewsItem({ title, description, url, src }) {
  const [loading, setLoading] = useState(true); // Initialize loading state

  const handleImageLoad = () => {
    setLoading(false); // Set loading to false when the image loads
  };

  return (
    <div
      className="card bg-dark text-light md-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{
        background: 'linear-gradient(180deg, #b54dff, #340447)',
        maxWidth: "345px",
        position: 'relative', // Position for absolute loader
        overflow: 'hidden', // Hide overflow from loader
      }}
    >
      {loading && ( // Show loader while loading
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center',     // Center vertically
            height: '200px',          // Match the height of the image
            position: 'absolute',      // Position the loader absolutely
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: semi-transparent background
            zIndex: 1, // Make sure loader is on top
          }}
        >
          <img
            src={loading_spinner}
            alt="Loading"
            style={{
              width: '50px',   // Adjust the size of the spinner
              height: '50px',  // Adjust the size of the spinner
            }}
          />
        </div>
      )}
      <img
        src={src}
        onLoad={handleImageLoad} // Call handleImageLoad when the image is loaded
        onError={(e) => { e.target.src = defaultImage }} // Set default image on error
        style={{
          height: '200px',
          width: '360px',
          display: loading ? 'none' : 'block' // Hide image while loading
        }}
        className="card-img-top"
        alt="News"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "NEWS"}.</p>
        <a href={url} className="btn btn-primary">Read more...</a>
      </div>
    </div>
  );
}

export default NewsItem;
