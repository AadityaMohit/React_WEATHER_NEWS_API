import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Import the CSS file
import NewsItem from './NewsItem';
import axios from 'axios'; // Import axios

function NewsBoard({ category, setCategory }) {
  const [articles, setArticles] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY; // Accessing the API key from the environment variables

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

    axios.get(url) // Use axios to fetch the data
      .then(response => {
        console.log(response.data); // Log the response to see its structure
        setArticles(response.data.articles || []);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
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

      {articles && articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />;
      })}
    </>
  );
}

export default NewsBoard;
