import React from "react";

import me from "../assests/images/me.jpeg";

export const AboutMe = () => {
  return (
    <section className="main-about-me" id="about-me">
      <h2 className="title-about-me">
        About <br></br> Me
      </h2>
      <section className="body-about-me">
        <h2>About Me</h2>
        <img src={me} alt="Jef Mitchell" />
        <p>
          I have over 15 years over professional experience in IT (and even
          longer as an enthusiast). My love for computers started with my first
          computer build in 2001, and grew into a life-long career. After years
          of dabbling in computer as a hobbyist throughout high school, I
          enlisted into the United States Air Force as a Cyber Systems
          Operations Specialist, which launched my career into IT. I decided to
          make the transition from networking and infrastructure to full-stack
          engineering as a way to pursue a more creative avenue in IT. I adore
          my cats (my friends have endearingly nicknamed me the "Crazy Cat
          Lady"), and am adventurous and passionate about being outdoors.
        </p>
      </section>
    </section>
  );
};
