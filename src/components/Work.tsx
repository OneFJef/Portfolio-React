import React from "react";

import Persist from "../assests/images/Persist.png";
import project_5 from "../assests/images/p-servers.jpg";

const projects = [
  {
    // Project 1
    title: "Weather Dashboard",
    link: "https://github.com/OneFJef/weather-dashboard",
    image_src:
      "https://user-images.githubusercontent.com/64971359/128202338-0fda2dfd-8692-43f5-ba4f-7269a523eaa7.png",
    image_alt: "Project 1",
  },
  {
    //   Project 2
    title: "Dad Joke Generator",
    link: "https://github.com/eliselabonte/whos-your-daddy",
    image_src:
      "https://github.com/eliselabonte/whos-your-daddy/raw/main/assets/images/dad_screenshot.png",
    image_alt: "Project 2",
  },
  {
    //   Project 3
    title: "Persist",
    link: "https://github.com/OneFJef/Persist",
    image_src: Persist,
    image_alt: "Project 3",
  },
  {
    //   Project 4
    title: "Quiz",
    link: "https://github.com/OneFJef/quiz",
    image_src:
      "https://github.com/OneFJef/quiz/raw/main/assets/images/Screenshot.png",
    image_alt: "Project 4",
  },
  {
    //   Project 5
    title: "Pineapple Tablet",
    link: "https://github.com/OneFJef",
    image_src: project_5,
    image_alt: "Project 5",
  },
];

export const Work = () => {
  return (
    <section className="main-work" id="work">
      <h2 className="title-work">Work</h2>
      <section className="body-work">
        <h2>Work</h2>
        <section className="projects">
          <figure className="first-project">
            {/* Project 1 */}
            <a href={projects[0].link}>
              <img src={projects[0].image_src} alt={projects[0].image_alt} />
            </a>
            <h3>{projects[0].title}</h3>
          </figure>
          <div>
            <figure>
              {/* Project 2 */}
              <a href={projects[1].link}>
                <img src={projects[1].image_src} alt={projects[1].image_alt} />
              </a>
              <h3>{projects[1].title}</h3>
            </figure>
            <figure>
              {/* Project 3 */}
              <a href={projects[2].link}>
                <img src={projects[2].image_src} alt={projects[2].image_alt} />
              </a>
              <h3>{projects[2].title}</h3>
            </figure>
          </div>
          <div>
            <figure>
              {/* Project 4 */}
              <a href={projects[3].link}>
                <img src={projects[3].image_src} alt={projects[3].image_alt} />
              </a>
              <h3>{projects[3].title}</h3>
            </figure>
            <figure>
              {/* Project 5 */}
              <a href={projects[4].link}>
                <img src={projects[4].image_src} alt={projects[4].image_alt} />
              </a>
              <h3>{projects[4].title}</h3>
            </figure>
          </div>
        </section>
      </section>
    </section>
  );
};
