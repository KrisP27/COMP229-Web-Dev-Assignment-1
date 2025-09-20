//Projects.jsx
//Kristopher Prince 301462555
//September 19th 2025

import React from "react";
import "../App.css";


//Two boxes for both projects in a single container
function Projects() {
  return (
    <section>
      <div className="flex-container">
          <div className="project-box">
            <img src="/assets/project1.png" alt="Project 1" className="project-img" />
            <p className="project-text">
              This is my first Project. "Fly me Through the Room" using Unity my group members and I made a game where you control a fly and must avoid obstacles in an auto-scrolling level.
            </p>
          </div>

          <div className="project-box">
            <img src="/assets/project2.png" alt="Project 2" className="project-img" />
            <p className="project-text">
              This is my second Project. "Flytrap Snack Attack" using Unity my group members and I will create a game where you control a moving flytrap collecting falling flies.
            </p>
          </div>

      </div>
    </section>
  );
}

export default Projects;