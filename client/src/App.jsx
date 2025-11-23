import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';

function App() {
  // Mock authentication - replace with real auth later
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/courses" 
          element={isAuthenticated ? <Courses /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;