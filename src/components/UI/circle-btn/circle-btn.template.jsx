import React from "react";

import "./circle-btn.style.scss";

function CircleButton(props) {
  return (
    <div className="action col-4">
      <a
        href="blog-detail.html"
        className="circle-btn"
        onMouseOver={this.chbg.bind(this)}
        onMouseOut={this.chbg.bind(this)}
      >
        <i className="play-icon"></i>
      </a>
    </div>
  );
}

export default CircleButton;
