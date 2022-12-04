import React from 'react';
import { Link } from 'react-router-dom';
import "../css/skills.css";
import Js from '../assets/js.png';
import JsColor from '../assets/js-color.png'
import Node from '../assets/nodejs.png';
import Reactjs from '../assets/react.png';
import ReactColor from '../assets/react-color.png';
import Sql from '../assets/sql.png';
import Tailwind from '../assets/tailwind.png';
import TailwindColor from '../assets/tailwind-color.png';
import Express from '../assets/express.png';
import Bootstrap from '../assets/bootstrap.png';


function Skills() {
  return (
    <div className='container-skills'>
        <p className='japan-txt-1-2'>イ<br></br>ン<br></br>タ<br></br>ー<br></br>ネ<br></br>ッ<br></br>ト</p>
        <Link to='/about'><p className='link-left-2'>A<br></br>B<br></br>O<br></br>U<br></br>T</p></Link>
        <Link to='/'><p className='link-top-black'>H  O  M  E</p></Link>
        <div className='container-skills-img'>
            <h2 className='title-skills'><span className='red-word'>W</span>eb Development :</h2>
            <div className='container-img'>
                <div className='js'>
                  <img className='img-skill' src={Js} alt='logo javascript'></img>
                  <img className='img-skill img-js-hover' src={JsColor} alt='logo javascript'></img>
                </div>
                <div className='react'>
                  <img className='img-skill' src={Reactjs} alt='logo reactjs'></img>
                  <img className='img-skill img-react-hover' src={ReactColor} alt='logo reactjs'></img>
                </div>
                <img className='img-skill' src={Node} alt='logo nodejs'></img>
                <img className='img-skill' src={Express} alt='logo Express'></img>
                <img className='img-skill' src={Sql} alt='logo Sql'></img>
                <div className='tailwind'>
                  <img className='img-skill' src={Tailwind} alt='logo Tailwind'></img>
                  <img className='img-skill img-tailwind-hover' src={TailwindColor} alt='logo Tailwind'></img>
                </div>
                
                <img className='img-skill' src={Bootstrap} alt='logo Bootstrap'></img>
            </div>
        </div>
        <Link to='/projects'><p className='link-right-2'>P<br></br>R<br></br>o<br></br>J<br></br>E<br></br>C<br></br>T<br></br>S</p></Link>
        <p className='japan-txt-2-2'>イ<br></br>ン<br></br>タ<br></br>ー<br></br>ネ<br></br>ッ<br></br>ト</p>
    </div>
  )
}

export default Skills