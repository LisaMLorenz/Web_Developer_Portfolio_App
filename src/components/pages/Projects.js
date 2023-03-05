import React from 'react';
import projects from './Projects/projects.json';
import project1Image from '../../images/inspirite_scsh.png';
import project2Image from '../../images/weekscheduler_scsh.png';
import project3Image from '../../images/quiz_scsh.png';
import project4Image from '../../images/weather_scsh.png';
import project5Image from '../../images/horiseon_scsh.png';
import project6Image from '../../images/teamprofile_scsh.png';
import '../../styles/projects.css'


function Projects() {
  const projectCards = [];

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    let image;

    switch (project.id) {
      case 1:
        image = project1Image;
        break;
      case 2:
        image = project2Image;
        break;
      case 3:
        image = project3Image;
        break;
        case 4:
        image = project4Image;
        break;
        case 5:
        image = project5Image;
        break;
        case 6:
        image = project6Image;
        break;
      default:
        image = '';
    }

    projectCards.push(
      <div className="col-md-4" id='project-card' key={project.id}>
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top" src={image} alt={project.altText} />
          <div className="card-body">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-text">{project.description}</p>
            <div className="d-flex justify-content-center align-items-center">
              <a href={project.deployedLink} className="btn btn-sm btn-primary">
                View the App
              </a>
              &nbsp;
              <a href={project.githubLink} className="btn btn-sm btn-primary">
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="row">{projectCards}</div>;
}

export default Projects;
