import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './Quiz'
import Licoes from './Licoes'
import Home from './Home'
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/lessons" element={<Licoes />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;