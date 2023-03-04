import React from 'react';
import projects from '../../../projects.json';



function Projects() {
  const projectCards = [];

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    projectCards.push(
      <div className="col-md-4" key={project.id}>
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top" src={project.image} alt={project.altText} />
          <div className="card-body">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-text">{project.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <a href={project.deployedLink} className="btn btn-sm btn-primary">
                View the App
              </a>
            </div>
            <div className="d-flex justify-content-between align-items-center">
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
