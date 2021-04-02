import React from 'react';
import data_projects from "../components/Portfolio_data";
import Portfolio_card from "./Portfolio_card";

const Portfolio = () => {
    return (
        <div className="container folio">
        <div className="folio-title">
        <h2 className="title">Portfolio</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {data_projects.map((project) =>{
            return <Portfolio_card key={project.name} project={project}/>
        })}
        </div>
            
        </div>
    )
}

export default Portfolio
