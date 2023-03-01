import React from "react";
import About from "../components/About.js";
import Presentation from "../components/Presentation.js";
import Works from "../components/Works.js";
import Header from "../components/Header.js";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <body>
        <Presentation />
        <div id="about">
          <br />
        </div>
        <About />
        <div id="works">
          <br />
        </div>
        <Works />
      </body>
    </div>
  );
};

export default Portfolio;
