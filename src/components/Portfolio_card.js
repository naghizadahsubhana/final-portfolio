import React from 'react';
import github from "../images/github.svg";

const Portfolio_card = ({ project }) => {
    return (
        <div className="folio container">
        <div className="col">
        <div className="card">
        <a target="_blank" href={project.deployed_url}>
        <img
        src={project.image}
        className="card-img-top project-image"
        alt={project.name}
        />
        </a>
        <div className="project-title">
        <a target="_blank" href={project.github_url}>
        <img src={github} style={{width:"19px"}} className="card-img-top project-icon"/>
        <h6 className="card-title">{project.name}</h6>

        </a>
        </div>
        </div>
        </div>
            
        </div>
    )
}

export default Portfolio_card
