import React from 'react';
import '../../styles/home.css'

function Home() {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Welcome to my Dev Portfolio</h1>
        <p>Code & Design. I can help you jump-start the success of your passion projects and business. With over 10 years of experience in freelance graphic design with a focus on the creative and social justice sector. Get in touch to discuss your ideas and needs!</p>
      </div>
      <img className="profile-image" src="https://payload.cargocollective.com/1/6/198060/2738952/lisa-lorenz-portrait-web.jpg" alt='Lisa Lorenz'/>
      
    </div>
  )
};

export default Home;