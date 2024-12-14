import React from 'react';

const Resume = () => {
  return (
    <section id="resume" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h2>My Resume</h2>
      <p>You can view and download my resume by clicking the button below:</p>
      <a 
        href="/Wijegunawardhana G.P.W .pdf" 
        download="Wijegunawardhana G.P.W .pdf"
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '1rem',
          color: '#fff',
          backgroundColor: '#00bcd4',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background 0.3s ease'
        }}
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
