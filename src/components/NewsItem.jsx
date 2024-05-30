import React from 'react';
import defaultImage from './Assets/w.png'; // import your default image

function NewsItem({ title, description, url, src }) {
  return (
    <>
      <div className="card bg-dark text-light md-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ background: 'linear-gradient(180deg, #b54dff, #340447)', maxWidth: "345px" }}>
        <img src={src} onError={(e) => { e.target.src = defaultImage }} style={{ height: "200px", width: "360px" }} className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">{description ? description.slice(0, 90) : "NEWS"}.</p>
          <a href={url} className="btn btn-primary">Read more...</a>
        </div>
      </div>
    </>
  )
}

export default NewsItem;
