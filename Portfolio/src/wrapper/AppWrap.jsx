import React from "react";
import NavDots from "../components/NavDots";
import SocialMedia from "../components/SocialMedia";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 ABDOLRAHMAN</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavDots active={idName} />
      </div>
    );
  };

export default AppWrap;
