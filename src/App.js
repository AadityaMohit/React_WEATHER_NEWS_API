import { useState, useEffect } from 'react'; // Added useEffect import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WeatherApp from './components/weatherApp/WeatherApp';
import Home from './components/Home';
import TextUtils from './components/TextUtils';
import News from './components/NewsBoard';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';  
import ProtectedRoute from './components/ProtectedRoute';
import { auth } from './firebase';  
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [category, setCategory] = useState("general"); // Fixed typo in 'category'
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);   
      console.log("Current user:", user);  
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="loading">Checking authentication...</div>;   
  }

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
    
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      
        <Route 
          path="/" 
          element={<ProtectedRoute user={user}><Home /></ProtectedRoute>} 
        />
        <Route 
          path="/weather" 
          element={<ProtectedRoute user={user}><WeatherApp /></ProtectedRoute>} 
        />
        <Route 
          path="/about" 
          element={<ProtectedRoute user={user}><About /></ProtectedRoute>} 
        />
        <Route 
          path="/contact" 
          element={<ProtectedRoute user={user}><Contact /></ProtectedRoute>} 
        />
        <Route 
          path="/text-utils" 
          element={<ProtectedRoute user={user}><TextUtils /></ProtectedRoute>} 
        />
        <Route 
          path="/news" 
          element={<ProtectedRoute user={user}><News category={category} setCategory={setCategory} /></ProtectedRoute>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
