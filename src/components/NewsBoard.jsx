import React, { useEffect, useState } from 'react';
import './Navbar.css';  
import NewsItem from './NewsItem';
import axios from 'axios';  
import loading_spinner from './Assets/loader-removebg-preview.png'; 

function NewsBoard({ category, setCategory }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); 
  const API_KEY = '586b48197bd33a56488f6d810e74960d'; 

  useEffect(() => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${API_KEY}`;

    setLoading(true);  
    axios.get(url)
      .then(response => {
        console.log(response.data); 
        setArticles(response.data.articles || []);  
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching
      });
  }, [category]);

  return (
    <>
      <nav className="navbar navbar-expand-lg news-navbar" style={{ background: 'linear-gradient(180deg, #b54dff, #340447)' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className='badge bg-light text-dark'>News Now : Categories</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => { setCategory("general") }} style={{ cursor: 'pointer', color: 'white' }}>General</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => { setCategory("technology") }} style={{ cursor: 'pointer', color: 'white' }}>Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => { setCategory("sports") }} style={{ cursor: 'pointer', color: 'white' }}>Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => { setCategory("entertainment") }} style={{ cursor: 'pointer', color: 'white' }}>Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => { setCategory("business") }} style={{ cursor: 'pointer', color: 'white' }}>Business</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h2 className="container1" style={{ marginTop: '20px', textAlign: 'center', marginBottom: '20px' }}>
        <span className='badge text-dark bg-danger'>Latest News</span>
      </h2>

      {loading ? ( // Show loader while articles are loading
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',      
            height: '300px',           
          }}
        >
          <img
            src={loading_spinner}
            alt="Loading"
            style={{
              width: '150px',    
              height: '150px',   
              animation: 'spin 1s linear infinite',  
              display: 'block' 
            }}
          />
        </div>
      ) : (
        articles && articles.map((news, index) => {
          return <NewsItem key={index} title={news.title} description={news.description} src={news.image} url={news.url} />; // Adjust the image and other fields as per GNews API response
        })
      )}
    </>
  );
}

export default NewsBoard;
