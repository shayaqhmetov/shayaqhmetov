import { Component } from "react";

import "./post-card.style.scss";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  chbg(node) {
    const element = node.target.parentNode.parentNode.previousElementSibling;
    if (!element.style.opacity || element.style.opacity === "0.7") {
      element.style.opacity = "0.1";
    } else {
      element.style.opacity = "0.7";
    }
  }

  render() {
    return (
      <div className={`post ${this.props.col}`}>
        <div className="content white-fill">
          <div className="image">
            <img src={this.props.image} alt="" />
          </div>
          <div className="info col-12">
            <div className="header">
              <span>5 min read</span>
            </div>
            <h5>{this.props.title}</h5>
            <p>{this.props.description}</p>
            <span>{this.props.created_date}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
