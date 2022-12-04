/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import Iris from "../assets/iris.png";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";

function About() {
  return (
    <div className="container-box">
      <Link to="/">
        <p className="link-top">
          <span className="txt-p-white">H O</span> M E
        </p>
      </Link>
      <p className="japan-txt-1">
        <div className="letter">
          ン<br></br>
        </div>
        <div className="letter">
          ー<br></br>
        </div>
        <div className="letter">
          タ<br></br>
        </div>
        <div className="letter">
          ネ<br></br>
        </div>
        <div className="letter">
          ッ<br></br>
        </div>
        <div className="letter">ト</div>
      </p>
      <Link to="/skills">
        <p className="link-left">
          S<br></br> <span className="red-letter">K</span>
          <br></br>I<br></br>L<br></br>L<br></br>S
        </p>
      </Link>
      <div className="box-1">
        <h5 className="txt-white">
          <span className="red-word">I</span> am Iris, web developer specialized
          in Javascript ES6 and React.js. Passionate about development, I
          started my professional retraining after spending several years as an
          assistant store manager.
          <br></br>Oh ! And I almost forgot, I love surfing and coffee.
        </h5>
      </div>

      <div className="box-2">
        <img className="img-profil" src={Iris} alt="my profil"></img>
      </div>
      <Link to="/projects">
        <p className="link-right">
          P<br></br>R<br></br>o<br></br> <span className="red-letter">J</span>
          <br></br>E<br></br>C<br></br>T<br></br>S
        </p>
      </Link>
      <p className="japan-txt-2">
        イ<br></br>ン<br></br>タ<br></br>ー<br></br>ネ<br></br>ッ<br></br>ト
      </p>
      <a href="https://github.com/Iris-succi">
        <img className="picto-github" src={Github} alt="logo Github"></img>
      </a>
      <a href="https://www.linkedin.com/in/iris-succi-70923822a/">
        <img
          className="picto-linkedin"
          src={Linkedin}
          alt="picto Linkedin"
        ></img>
      </a>
    </div>
  );
}

export default About;
