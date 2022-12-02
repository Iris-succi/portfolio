import React from 'react';
import Project from '../components/Project';
import { Link } from 'react-router-dom';
import "../css/skills.css";
import Little from "../assets/little-turtle-nb.png";
import Nems from "../assets/nems-nb.png";
import Boucherie from "../assets/boucherie-nb.png";
import Wot from "../assets/wot-nb.png"

function Projects() {
    const projects = [{
      picture : Little,
      title : "Little Turtles  : Quizz environment",
      description : "🎯 Objectives : static construction using HTML, CSS and JS vanilla",
      theme : "🌊 Theme : Ocean pollution - Sensibilization"
    },{
      picture : Nems,
      title : "Les p’tits nems : Referencing recipes",
      description : "🎯 Objectives : API call using React, Tailwind, Node.js, Express",
      theme : "🥢 Theme :  World recipes",
    },{
      picture : Boucherie,
      title : "Boucherie La Bourine",
      description : "🎯 Objectives : static construction using HTML, CSS and JS vanilla ",
      theme : "🔪 Theme : Boucherie la Bouirne",
    },{
      picture : Wot,
      title : "Wild On Track :  Flights booking",
      description : "🎯 Objectives : API call using React, Material UI ",
      theme : "✈️ Theme : Travel"
    }]

  return (
    <div className='container-skills'>
      <p className='japan-txt-1-2'>イ<br></br>ン<br></br>タ<br></br>ー<br></br>ネ<br></br>ッ<br></br>ト</p>
      <Link to='/skills'><p className='link-left-2'>S<br></br>K<br></br>I<br></br>L<br></br>L<br></br>S</p></Link>
      <Link to='/'><p className='link-top'>H  O  M  E</p></Link>
      
      <div className='container-projects'>
        {projects.map((project) => 
            <Project project={project}/>
        )}
      </div>

      <Link to="/about"><p className='link-right-2'>A<br></br>B<br></br>O<br></br>U<br></br>T</p></Link>
      <p className='japan-txt-2'>イ<br></br>ン<br></br>タ<br></br>ー<br></br>ネ<br></br>ッ<br></br>ト</p>
    </div>
  )
}

export default Projects