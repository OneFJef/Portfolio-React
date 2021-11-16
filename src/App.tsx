import React from "react";
import "./App.css";

import me from "./assests/images/me.jpeg";
import Persist from "./assests/images/Persist.png";
import project_5 from "./assests/images/p-servers.jpg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Jef Mitchell</h1>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact-me">Contact Me</a>
            </li>
            <li>
              <a href="./assests/files/resume.pdf" download>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <figure className="banner"></figure>
        <h3 className="banner-text">Excellence in all I do.</h3>
        <section className="main-about-me" id="about-me">
          <h2 className="title-about-me">
            About <br></br> Me
          </h2>
          <section className="body-about-me">
            <h2>About Me</h2>
            <img src={me} alt="Jef Mitchell" />
            <p>
              I have over 15 years over professional experience in IT (and even
              longer as an enthusiast). My love for computers started with my
              first computer build in 2001, and grew into a life-long career.
              After years of dabbling in computer as a hobbyist throughout high
              school, I enlisted into the United States Air Force as a Cyber
              Systems Operations Specialist, which launched my career into IT. I
              decided to make the transition from networking and infrastructure
              to full-stack engineering as a way to pursue a more creative
              avenue in IT. I adore my cats (my friends have endearingly
              nicknamed me the "Crazy Cat Lady"), and am adventurous and
              passionate about being outdoors.
            </p>
          </section>
        </section>
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
        <section className="main-contact-me" id="contact-me">
          <h2 className="title-contact-me">
            Contact <br></br> Me
          </h2>
          <nav className="body-contact-me">
            <h2>Contact Me</h2>
            <ul>
              <li>
                <a href="tel:601-927-2882">601.927.2882</a>
              </li>
              <li>
                <a href="mailto:Jef@JefMitchell.com">Jef@JefMitchell.com</a>
              </li>
              <li>
                <a href="https://github.com/OneFJef">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jefmitchell/">Linkedin</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default App;
