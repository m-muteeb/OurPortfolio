import React from 'react';
import './App.css'; // Import your main CSS file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FirebaseProvider } from './firebase/FirebaseContext';


import Home from './pages/Home';



const App = () => {
  return (
    <FirebaseProvider>
      <Router>
       
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
    
      </Router>
    </FirebaseProvider>
  );
};

export default App;
