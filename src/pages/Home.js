import React from 'react'
import "../css/home.css"
import Avatar from '../assets/Iris_Succi.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
        <div className='container-box'>
            
            <Link to="/projects" ><p className='link-top'><span className='txt-p-white'>P  R  O  J  </span>E  C  T  S</p></Link>
            <p className='japan-txt-1'>イ<br></br>ン<br></br>タ<br></br>ー<br></br>ネ<br></br>ッ<br></br>ト</p>
    
            <Link to="/skills"><p className='link-left'>S<br></br>K<br></br>I<br></br>L<br></br>L<br></br>S</p></Link>

            <div className='box-1'> 
                <h1 className='txt-white'>
                <span className='txt-title'>HI,</span>
                <br></br>
                I’m <span className='red-word'>I</span>ris <span className='red-word'>S</span>ucci,
                <br></br>
                I’m front end developer
                </h1>
            </div>

            <div className='box-2'>
                <img src={Avatar} alt='avatar'></img>
            </div>
            
            <Link to="/about"><p className='link-right'>A<br></br>B<br></br>O<br></br>U<br></br>T</p></Link>
            <p className='japan-txt-2'>イ<br></br>ン<br></br>タ<br></br>ー<br></br>ネ<br></br>ッ<br></br>ト</p>
        </div>
  )
}

export default Home