import React from "react";
import { FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello Bro</h2>
        <div className="prompt">
          <p>Software engineer</p>
          <BsGithub />
          <BsLinkedin />
          <FiMail />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>Reactjs,Angular,Redux,Css</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Nodejs,Django,Spring</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript,Java,Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
