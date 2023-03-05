import React, { useState } from 'react';
import '../../styles/about.css'

function About() {
  const [expanded, setExpanded ] = useState(false);

  const handleToggle = () => {
    setExpanded(prevExpanded => !prevExpanded);
  }
  return (
    <div class="aboutMe">
      <h1>About Me</h1>
      <br></br>
      <h4>Hello I'm Lisa! &#x1F44B;</h4>
      <p id='text'>I am a web developer based in Manchester. I specialize in Javascript.
        <br></br> Contact: hej@frau-lorenz.de or call me at +44.777.01.51.168
        <br></br>
        <br></br>
        <h5>Dev Skill Set</h5>
        <ul class="dev-icons">
          <li><i class="fab fa-js"></i> JavaScript</li>
          <li><i class="fab fa-bootstrap"></i> Bootstrap</li>
          <li><i class="fab fa-html5"></i> HTML</li>
          <li><i class="fab fa-css3-alt"></i> CSS</li>
          <li><i class="fab fa-react"></i> React</li>
          <li><i class="fas fa-cube"></i> API</li>
        </ul>
        <br></br>
        <br></br>
        <h5>Background</h5>
        I grew up in a small village in the rural South of Germany.
        After highschool I worked as director's assistant at Mannheim
        National Theatre before studying graphic design at the University
        of Applied Sciences in Mainz. Since 2012 I live and work in Manchester, U.K.
        <br></br>
        <br></br>
        <h5>Education</h5>
        I hold a degree in Communication Design and a post-grad in Design & Art Direction. In March 2023 I graduate with a certificate in Front-End Development from the UK government-backed edX Trilogy digital skills bootcamp.
        <br></br>
        <br></br>
        <h5>Other Projects</h5>
        I am the founder and editor of NOUS magazine - a print publication
        raising awareness for mental illness which features poetry, interviews,
        illustration and photography related to the topic. I also run independent RISO publishing house Team Trident Press, am co-founder of cultural newsletter MURMUR and mini-festival As We Are Away. Currently I am also working as Technical Assistant at Manchester School of Art's book binding workshop.
        <br></br>
      </p>
      <button id="toggle-btn" onClick={handleToggle}>
        {expanded ? 'Show Less' : 'Read More'}
        </button>
    </div>

  )
};

const text = document.getElementById("text");
const toggleBtn = document.getElementById("toggle-btn");

let expanded = false;


export default About;
