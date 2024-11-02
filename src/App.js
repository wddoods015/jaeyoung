import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'; 
import Resume from './pages/Resume';

// import Skill from './pages/Skill';
// import Project from './pages/Project';

function App() {
  return (
    <Router>
      <div className='landing-page'>
        <Routes>
          <Route path='/jaeyoung' element={<Home />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
        <div className='footer'>
        <span>© 2024. jaeyoung's portfolio All Rights Reserved.</span>
        </div>
      </div>
    </Router>
  );
}

export default App;
