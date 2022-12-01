import React from 'react'
import { Link } from 'react-router-dom'
import "../css/home.css"
import Iris from '../assets/iris.png'

function About() {
  return (
    <div className='container-box'>
        <Link to='/'><p className='link-top'><span className='txt-p-white'>H O</span> M E</p></Link>
        <p className='japan-txt-1'>イ<br></br>ン<br></br>タ<br></br>ー<br></br>ネ<br></br>ッ<br></br>ト</p>
        <Link to='skills'><p className='link-left'>S<br></br>K<br></br>I<br></br>L<br></br>L<br></br>S</p></Link>
        <div className='box-1'> 
            <h5 className='txt-white'>          
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde officia dolore aperiam libero ipsa sed et nulla earum, consectetur fugiat atque, distinctio iste consequuntur a architecto vel. Repellat, minima temporibus.
            </h5>
        </div>

        <div className='box-2'>
            <img className='img-profil' src={Iris} alt='my profil'></img>
        </div>
        <Link><p className='link-right'>P<br></br>R<br></br>o<br></br>J<br></br>E<br></br>C<br></br>T<br></br>S</p></Link>
        <p className='japan-txt-2'>イ<br></br>ン<br></br>タ<br></br>ー<br></br>ネ<br></br>ッ<br></br>ト</p>
    </div>
  )
}

export default About