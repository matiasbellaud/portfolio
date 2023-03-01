import React from "react";
import githubLogo from "./../assets/img/github.png";

const Works = () => {
  return (
    <div className="works">
      <div id="allSubtitle">
        <div id="subtitle">
          <span id="titleNumber">02.</span>
          &nbsp;Some little works
        </div>
        <div id="ligne"></div>
      </div>

      <ul className="allWork">
        <div className="connect4">
          <div className="imageConnect4">
            <div id="effect"></div>
          </div>
          <div className="connect4Description">
            <p id="featuredProject">Featured project</p>
            <p id="nameOfProject">Connect 4</p>
            <div id="boxDescription">
              <p>
                Project of a Connect 4 in java, the goal was to learn java and
                the class principle.
              </p>
            </div>
            <p id="tecnoProject">java &nbsp; github &nbsp; VS Code</p>
            <div>
              <a href="https://github.com/matiasbellaud/puissance4_java">
                <img id="githubLogo" src={githubLogo} alt="github" />
              </a>
            </div>
          </div>
        </div>
        <div className="hangmanWeb">
          <div className="imageHangmanWeb">
            <div id="effect"></div>
          </div>
          <div className="hangmanWebDescription">
            <p id="featuredProject">Featured project</p>
            <p id="nameOfProject">HangmanWeb</p>
            <div id="boxDescription">
              <p>
                Project of a Hangman Web in Golang, html and css, the goal was
                to learn how to create a web page.
              </p>
            </div>
            <p id="tecnoProject">
              golang &nbsp; html5 &nbsp; css3 &nbsp; github &nbsp; VS Code
            </p>
            <div>
              <a href="https://github.com/matiasbellaud/hangman_web">
                <img id="githubLogo" src={githubLogo} alt="github" />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="imagePortfolio">
            <div id="effect"></div>
          </div>
          <div className="portfolioDescription">
            <p id="featuredProject">Featured project</p>
            <p id="nameOfProject">Portfolio</p>
            <div id="boxDescription">
              <p>
                A portfolio to present myself and my work to others. the source
                code is available on github.
              </p>
            </div>
            <p id="tecnoProject">
              javascript &nbsp; react &nbsp; css3 &nbsp; github &nbsp; VS Code
            </p>
            <div>
              <a href="https://github.com/matiasbellaud/portfolio">
                <img id="githubLogo" src={githubLogo} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Works;
