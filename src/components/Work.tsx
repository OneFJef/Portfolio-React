import React from "react";

import Persist from "../assests/images/Persist.png";
import project_5 from "../assests/images/p-servers.jpg";

export const Work = () => {
  return (
    <section className="main-work" id="work">
      <h2 className="title-work">Work</h2>
      <section className="body-work">
        <h2>Work</h2>
        <section className="projects">
          <figure className="first-project">
            <a href="https://github.com/OneFJef/weather-dashboard">
              <img
                src="https://user-images.githubusercontent.com/64971359/128202338-0fda2dfd-8692-43f5-ba4f-7269a523eaa7.png"
                alt="Project 1"
              />
            </a>
            <h3>Weather Dashboard</h3>
          </figure>
          <div>
            <figure>
              <a href="https://github.com/eliselabonte/whos-your-daddy">
                <img
                  src="https://github.com/eliselabonte/whos-your-daddy/raw/main/assets/images/dad_screenshot.png"
                  alt="Project 2"
                />
              </a>
              <h3>Dad Joke Generator</h3>
            </figure>
            <figure>
              <a href="https://github.com/OneFJef/Persist">
                <img src={Persist} alt="Project 3" />
              </a>
              <h3>Persist</h3>
            </figure>
          </div>
          <div>
            <figure>
              <a href="https://github.com/OneFJef/quiz">
                <img
                  src="https://github.com/OneFJef/quiz/raw/main/assets/images/Screenshot.png"
                  alt="Project 4"
                />
              </a>
              <h3>Quiz</h3>
            </figure>
            <figure>
              <a href="https://github.com/OneFJef">
                <img src={project_5} alt="Project 5" />
              </a>
              <h3>Pineapple Tablet</h3>
            </figure>
          </div>
        </section>
      </section>
    </section>
  );
};
