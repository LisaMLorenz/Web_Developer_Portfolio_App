import React, { useState } from 'react';
import '../../styles/about.css'

function About() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(prevExpanded => !prevExpanded);
  }

  return (
    <div className="aboutMe">
      <h1>About Me</h1>
      <br />
      <h4>Hello I'm Lisa! &#x1F44B;</h4>
      <p id="text">
        I am a web developer based in Manchester. I specialize in Javascript.
        <br />
        Contact: hej@frau-lorenz.de or call me at +44.777.01.51.168
      </p>
      <br />
      <h5>Dev Skill Set</h5>
      <ul className="dev-icons">
        <li>
          <i className="fab fa-js"></i> JavaScript
        </li>
        <li>
          <i className="fab fa-bootstrap"></i> Bootstrap
        </li>
        <li>
          <i className="fab fa-html5"></i> HTML
        </li>
        <li>
          <i className="fab fa-css3-alt"></i> CSS
        </li>
        <li>
          <i className="fab fa-react"></i> React
        </li>
        <li>
          <i className="fas fa-cube"></i> API
        </li>
      </ul>
      
      {expanded && (
        <>
        <br></br>
      <h5>Background</h5>
      <p>
        I grew up in a small village in the rural South of Germany. After highschool I worked as director's assistant at Mannheim National Theatre before studying graphic design at the University of Applied Sciences in Mainz. Since 2012 I live and work in Manchester, U.K.
      </p>
      
          <br />
          <h5>Education</h5>
          <p>
            I hold a degree in Communication Design and a post-grad in Design & Art Direction. In March 2023 I graduate with a certificate in Front-End Development from the UK government-backed edX Trilogy digital skills bootcamp.
          </p>
          <br />
          <h5>Other Projects</h5>
          <p>
            I am the founder and editor of NOUS magazine - a print publication raising awareness for mental illness which features poetry, interviews, illustration and photography related to the topic. I also run independent RISO publishing house Team Trident Press, am co-founder of cultural newsletter MURMUR and mini-festival As We Are Away. Currently I am also working as Technical Assistant at Manchester School of Art's book binding workshop.
          </p>
        </>
      )}
      <br />
      <button id="toggle-btn" onClick={handleToggle}>
        {expanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
}

export default About;
