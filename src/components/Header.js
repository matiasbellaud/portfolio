import React from "react";

const Header = () => {
  let scrollBefore = 0;

  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    if (scrollBefore > scrolled) {
      scrollBefore = scrolled;
      document.getElementById("header").style.top = "0px";
    } else {
      scrollBefore = scrolled;
      document.getElementById("header").style.top = "-80px";
    }
  });

  return (
    <div className="header">
      <header id="header">
        <nav>
          <lu>
            <li>
              <a href="#about">
                <button id="headerNavItems">
                  <span id="numberInNav">01.</span> About
                </button>
              </a>
            </li>
            <li>
              <a href="#works">
                <button id="headerNavItems">
                  <span id="numberInNav">02.</span> Experience
                </button>
              </a>
            </li>
            <li>
              <a href="#works" style={{ marginTop: 40 }}>
                <button id="headerNavItems">
                  <span id="numberInNav">03.</span> Work
                </button>
              </a>
            </li>
            <li>
              <a href="#contact">
                <button id="headerNavItems">
                  <span id="numberInNav">04.</span> Contact
                </button>
              </a>
            </li>
          </lu>
        </nav>
      </header>
    </div>
  );
};

export default Header;
