import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="allContact">
        <div id="contactSubtitle">
          <span id="contactTitleNumber">03.</span>
          &nbsp;get in touch
        </div>
        <p className="contactText">
          Even though I am still a student, you can always contact me for offers
          or questions. I will do my best to answer you!
        </p>
        <div className="buttonContactBox">
          <a
            className="allContactMeButton"
            href="mailto:bellaud.matias@gmail.com"
            class="mailAdressLink"
          >
            <button className="contactMeButton">Contact me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
