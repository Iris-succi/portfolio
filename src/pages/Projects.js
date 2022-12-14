import React from "react";
import Project from "../components/Project";
import { Link } from "react-router-dom";
import "../css/skills.css";
import Little from "../assets/little-turtle-nb.png";
import LittleColor from "../assets/little-turtle-color.png";
import Nems from "../assets/nems-nb.png";
import NemsColor from "../assets/nems-color.png";
import Boucherie from "../assets/boucherie-nb.png";
import BoucherieColor from "../assets/boucherie-color.png";
import Wot from "../assets/wot-nb.png";
import WotColor from "../assets/wot-color.png";

function Projects() {
  const projects = [
    {
      picture: Little,
      pictureC: LittleColor,
      title: "Little Turtles  : Quizz environment",
      description:
        "π― Objectives : static construction using HTML, CSS and JS vanilla",
      theme: "π Theme : Ocean pollution - Sensibilization",
      link: "https://iris-succi.github.io/little_turtles/",
    },
    {
      picture: Nems,
      pictureC: NemsColor,
      title: "Les pβtits nems : Referencing recipes",
      description:
        "π― Objectives : API call using React, Tailwind, Node.js, Express",
      theme: "π₯’ Theme :  World recipes",
    },
    {
      picture: Boucherie,
      pictureC: BoucherieColor,
      title: "Boucherie La Bourine",
      description:
        "π― Objectives : static construction using HTML, CSS and JS vanilla ",
      theme: "πͺ Theme : Boucherie la Bouirne",
      link: "https://www.boucherie-labourine.com",
    },
    {
      picture: Wot,
      pictureC: WotColor,
      title: "Wild On Track :  Flights booking",
      description: "π― Objectives : API call using React, Material UI ",
      theme: "βοΈ Theme : Travel",
    },
  ];

  return (
    <div className="container-skills">
      <p className="japan-txt-1-2">
        γ€<br></br>γ³<br></br>γΏ<br></br>γΌ<br></br>γ<br></br>γ<br></br>γ
      </p>
      <Link to="/skills">
        <p className="link-left-2">
          S<br></br> <span className="red-letter">K</span>
          <br></br>I<br></br>L<br></br>L<br></br>S
        </p>
      </Link>
      <Link to="/">
        <p className="link-top-black">H O M E</p>
      </Link>

      <div className="container-projects">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>

      <Link to="/about">
        <p className="link-right-2">
          A<br></br>B<br></br>
          <span className="red-letter">O</span>
          <br></br>U<br></br>T
        </p>
      </Link>
      <p className="japan-txt-2">
        <div className="letter">
          γ€<br></br>
        </div>
        <div className="letter">
          γ³<br></br>
        </div>
        <div className="letter">
          γΏ<br></br>
        </div>
        <div className="letter">
          γΌ<br></br>
        </div>
        <div className="letter">
          γ<br></br>
        </div>
        <div className="letter">
          γ<br></br>
        </div>
        <div className="letter">γ</div>
      </p>
    </div>
  );
}

export default Projects;
