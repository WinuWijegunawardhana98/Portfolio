import React, { useEffect } from 'react';
import myImage from '../assets/my.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section 
      id="about" 
      style={{ padding: '50px 20px', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}
    >
      <div 
        style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img 
          src={myImage} 
          alt="My Picture" 
          style={{ 
            maxWidth: '100%',  
            height: 'auto',  
            borderRadius: '50%' 
          }} 
        />
      </div>
      <div 
        style={{ flex: 2, paddingLeft: '20px' }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h2 style={{ fontSize: '2.5rem', color: '#333' }}>About Me</h2>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
          I am a passionate and dedicated 4th-year undergraduate student pursuing a BSc (Hons) in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT), with a focus on full-stack development. I have gained hands-on experience as a Full Stack Developer Intern at EWIS Career Training Center, where I developed both front-end and back-end web applications, optimizing user interfaces and integrating APIs for seamless functionality.
          <br /><br />
          My education has equipped me with strong technical skills in programming languages such as JavaScript, Python, Java, and HTML/CSS, as well as frameworks and libraries like React, Node.js, Express.js, and Spring Boot. I am proficient in using databases like MySQL, MongoDB, and Firebase, and I have experience with AWS and Azure cloud platforms.
          <br /><br />
          I am continuously seeking opportunities to learn and grow in the ever-evolving field of web development. I am particularly interested in creating innovative solutions that make a difference and am eager to contribute to projects that challenge my skills and push me to be a better developer.
        </p>
      </div>
    </section>
  );
};

export default About;
