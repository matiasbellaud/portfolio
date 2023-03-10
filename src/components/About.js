import React from "react";
import profil from "./../assets/img/profil.jpg";

const About = () => {
  return (
    <div className="about">
      <section className="aboutSection">
        <div id="allSubtitle">
          <span id="titleNumber">01.</span>
          <div id="subtitle">&nbsp;About me</div>
          <div id="ligne"></div>
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

        <p className="languageIntro">
          Language I have been working with recently :
        </p>
        <lu className="languages">
          <div id="row">
            <li id="language">
              <p>
                {" "}
                <span id="triangleLanguage"> ▸ </span> html5{" "}
              </p>
            </li>
            <li id="language">
              <p>
                {" "}
                <span id="triangleLanguage"> ▸ </span> css3{" "}
              </p>
            </li>
          </div>
          <div id="row">
            <li id="language">
              <p>
                {" "}
                <span id="triangleLanguage"> ▸ </span> golang{" "}
              </p>
            </li>
            <li id="language">
              <p>
                {" "}
                <span id="triangleLanguage"> ▸ </span> javascript{" "}
              </p>
            </li>
          </div>
        </lu>
      </section>
    </div>
  );
};

export default About;
