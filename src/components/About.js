import React from "react";
import profil from "./../assets/img/profil.jpg";

const About = () => {
  return (
    <div className="about">
      <section className="aboutSection">
        <div id="allSubtitle">
          <span id="titleNumber">01.</span>
          <div id="subtitle">&nbsp;About me</div>
          <div id="ligneAbout"></div>
        </div>

        <div className="profil">
          <p className="descriptionText">
            Hello, I'm Matias Bellaud, I'm a french student who learn
            development and enjoy create some little things. I wanted to learn
            development in 2019, I started with html css when I decide to create
            a little website with a friend. Since then I've always continued to
            learn how to code and now I'm a student in development.
          </p>

          <div className="pictureDecoration">
            <div className="picture">
              <img src={profil} alt="profil" />
            </div>
            <div className="picture decoration"></div>
          </div>
        </div>

        <section className="languageSection">
          <p className="languageIntro">
            Language I have been working with recently :
          </p>
          <div className="languages">
            <div id="row">
              <ul id="languageList">
                <li id="language">
                  <p>
                    {" "}
                    <span id="triangleLanguage"> ▸ </span> HTML5{" "}
                  </p>
                </li>
                <li id="language">
                  <p>
                    {" "}
                    <span id="triangleLanguage"> ▸ </span> CSS3{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div id="row">
              <ul id="languageList">
                <li id="language">
                  <p>
                    {" "}
                    <span id="triangleLanguage"> ▸ </span> C#{" "}
                  </p>
                </li>
                <li id="language">
                  <p>
                    {" "}
                    <span id="triangleLanguage"> ▸ </span> Javascript{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div id="row">
              <ul id="languageList">
                <li id="language">
                  <p>
                    {" "}
                    <span id="triangleLanguage"> ▸ </span> Java{" "}
                  </p>
                </li>
                <li id="language">
                  <p>
                    {" "}
                    <span id="triangleLanguage"> ▸ </span> SQL{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div id="row">
              <ul id="languageList">
                <li id="language">
                  <p>
                    {" "}
                    <span id="triangleLanguage"> ▸ </span> Python{" "}
                  </p>
                </li>
                <li id="language">
                  <p>
                    {" "}
                    <span id="triangleLanguage"> ▸ </span> PowerPlatform{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
