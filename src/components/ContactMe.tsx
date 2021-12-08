import React from "react";

export const ContactMe = () => {
  return (
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
  );
};
