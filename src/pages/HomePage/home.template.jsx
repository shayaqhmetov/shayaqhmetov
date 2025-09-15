import { Component } from "react";

import Hero from "../../components/Hero/";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }

  render() {
    return (
      <div className="container">
        <Hero />
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default HomePage;
