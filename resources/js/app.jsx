// import './bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your components/pages
import Login from './pages/login.jsx';
// import Home from './pages/home.jsx';
import Dashboard from './pages/dashboardContent.jsx';
// import NotFound from './pages/404.jsx';

const App = () => {
  return (
    <Router>
      <Routes>       
        <Route path="/login" element={<Login />} />   
        <Route path="/dashboard" element={<Dashboard />} />      
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);



//  {/* Define your routes */}
//  <Route path="/" element={<Home />} />
// <Route path="/dashboard" element={<Dashboard />} />
// {/* 404 Page */}
// <Route path="*" element={<NotFound />} />