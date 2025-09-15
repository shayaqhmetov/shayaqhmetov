import "./hero.scss";

import React from "react";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-content-avatar">
            <img src="./frog.jpg" alt="Avatar" />
          </div>
          <div className="hero-content-welcome-text">
            <h1>Hey, I'm <span className="primary-text">Ruslan</span></h1>
            <h1>A <span className="primary-text">Software Engineer</span></h1>
          </div>
        </div>
      </div>
    );
  }
}
