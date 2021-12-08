import React from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Header } from "./components/Header";
import { Work } from "./components/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <figure className="banner"></figure>
        <h3 className="banner-text">Excellence in all I do.</h3>
        <AboutMe />
        <Work />
        <ContactMe />
      </main>
    </div>
  );
}

export default App;
