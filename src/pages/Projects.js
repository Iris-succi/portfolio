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
        "🎯 Objectives : static construction using HTML, CSS and JS vanilla",
      theme: "🌊 Theme : Ocean pollution - Sensibilization",
      link: "https://iris-succi.github.io/little_turtles/",
    },
    {
      picture: Nems,
      pictureC: NemsColor,
      title: "Les p’tits nems : Referencing recipes",
      description:
        "🎯 Objectives : API call using React, Tailwind, Node.js, Express",
      theme: "🥢 Theme :  World recipes",
    },
    {
      picture: Boucherie,
      pictureC: BoucherieColor,
      title: "Boucherie La Bourine",
      description:
        "🎯 Objectives : static construction using HTML, CSS and JS vanilla ",
      theme: "🔪 Theme : Boucherie la Bouirne",
      link: "https://www.boucherie-labourine.com",
    },
    {
      picture: Wot,
      pictureC: WotColor,
      title: "Wild On Track :  Flights booking",
      description: "🎯 Objectives : API call using React, Material UI ",
      theme: "✈️ Theme : Travel",
    },
  ];

  return (
    <div className="container-skills">
      <p className="japan-txt-1-2">
        イ<br></br>ン<br></br>タ<br></br>ー<br></br>ネ<br></br>ッ<br></br>ト
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
          イ<br></br>
        </div>
        <div className="letter">
          ン<br></br>
        </div>
        <div className="letter">
          タ<br></br>
        </div>
        <div className="letter">
          ー<br></br>
        </div>
        <div className="letter">
          ネ<br></br>
        </div>
        <div className="letter">
          ッ<br></br>
        </div>
        <div className="letter">ト</div>
      </p>
    </div>
  );
}

export default Projects;
