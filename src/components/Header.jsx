import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Winodya Wijegunawardhana</h1>
      <nav>
        <ul style={navStyle}>
          <li><Link to="/" style={linkStyle}>About</Link></li>
          <li><Link to="/projects" style={linkStyle}>Projects</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          <li><Link to="/resume" style={linkStyle}>Resume</Link></li> {/* Resume link */}
        </ul>
      </nav>
    </header>
  );
};


// Inline styles for simplicity, or you can use an external CSS file
const headerStyle = {
  backgroundColor: '#2C3E50', // Dark blue shade for the header
  color: '#fff',
  padding: '20px 0', // Padding for spacing
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Shadow for a subtle 3D effect
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  letterSpacing: '2px',
  marginBottom: '15px',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  padding: '12px 20px', // More padding for bigger click areas
  fontSize: '1.2rem',
  margin: '0 15px',
  fontWeight: '500', // Semi-bold font for emphasis
  transition: 'color 0.3s, transform 0.3s', // Smooth transition for color and transform effects
};

const linkHoverStyle = {
  color: '#00bcd4', // Highlight color for hover effect
  transform: 'scale(1.1)', // Slightly enlarges the link on hover
};

export default Header;
