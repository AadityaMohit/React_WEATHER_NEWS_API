
import Navbar from './components/Navbar';
// import './App.css';
import WeatherApp from './components/weatherApp/WeatherApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TextUtils from './components/TextUtils';
import News from './components/NewsBoard';
import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  const [cateogry, setCateogry] = useState("general")

  return (
    <>
    <Router>
    <Navbar/>
<Routes>

<Route path='/weather' title={"Weather"}element={<WeatherApp />} />
<Route path='/' title={"Home"}element={<Home />} />
<Route path='/about' title={"About"}element={<About />} />
<Route path='/contact' title={"Contact"}element={<Contact />} />
<Route path='/text-utils' title={"Text_Utils"}element={<TextUtils />} />
<Route path='/News' title={"Text_Utils"} element={<News category={cateogry} setCategory={setCateogry} />} />




  
</Routes>




    </Router>
    </>
  );
}

export default App;
