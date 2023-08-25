import { Component } from "react";

import './post.style.scss';

// function chbg(node, hover) {
//     console.log(node);
//     // if (hover) {
//     //     node.style.opacity = "0.1";
//     // } else {
//     //     node.style.opacity = "0.7";
//     // }
// }

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
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
            <div className={`feature-post ${this.props.col}`}>
                <div className="darken"></div>
                <div className="backgroundImg"
                    style={{
                        backgroundImage: `url(${this.props.image})`,
                        backgroundSize: "cover",
                    }}>
                </div>
                <div className="row content">
                    <div className="info col-8">
                        <h3 className="white">{this.props.title}</h3>
                        <span className="white">{this.props.created_date}</span>
                        <div className={`white ${this.props.showtext ? 'big-text' : 'short-text'}`}>{this.props.description}</div>
                    </div>
                    <div className="action col-4">
                        <a href="blog-detail.html" className="circle-btn"
                            onMouseOver={this.chbg.bind(this)}
                            onMouseOut={this.chbg.bind(this)}><i
                                className="play-icon"></i></a>
                    </div>
                </div>
            </div >
        );
    }
}

export default Post;