import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos'; // Animation library
import 'aos/dist/aos.css'; // Import AOS styles
import './App.css'; // Custom styles
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Header with navigation */}
        <Header />

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page route */}
          <Route path="/about" element={<About />} />  {/* About page route */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
