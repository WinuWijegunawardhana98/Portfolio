import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: '60px 20px',
        textAlign: 'center',
        backgroundColor: "#0f0f1a", 
        color: '#e6e6e6', 
      }}
    >
      <h2 style={{ color: '#b3a3d7', fontSize: '2.5rem', marginBottom: '20px' }}>
        About Me
      </h2>
      
      <p style={{ color: '#d1d1d1', fontSize: '1.2rem' }}>
        I am a passionate and dedicated 4th-year undergraduate student pursuing a BSc (Hons) in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT), with a focus on full-stack development. I have gained hands-on experience as a Full Stack Developer Intern at EWIS Career Training Center, where I developed both front-end and back-end web applications, optimizing user interfaces and integrating APIs for seamless functionality.
      </p>
      <p style={{ color: '#d1d1d1', fontSize: '1.2rem' }}>
        My education has equipped me with strong technical skills in programming languages such as JavaScript, Python, Java, and HTML/CSS, as well as frameworks and libraries like React, Node.js, Express.js, and Spring Boot. I am proficient in using databases like MySQL, MongoDB, and Firebase, and I have experience with AWS and Azure cloud platforms.
      </p>
      <p style={{ color: '#d1d1d1', fontSize: '1.2rem' }}>
        I am continuously seeking opportunities to learn and grow in the ever-evolving field of web development. I am particularly interested in creating innovative solutions that make a difference and am eager to contribute to projects that challenge my skills and push me to be a better developer.
      </p>
    </section>
  );
};

export default About;
