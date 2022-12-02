import React from 'react';
import '../css/project.css';


function project({project}) {
    console.log(project)
  return (
    
    <div className='project-card'>
        <img className='img-project' src={project.picture} alt={project.title}></img>
        <h2 className='title-project'>{project.title}</h2>
        <div className='hr'></div>
        <p className='p-project'>{project.description}</p>
        <p className='p-project'>{project.theme}</p>
    </div>
    
  )
}

export default project