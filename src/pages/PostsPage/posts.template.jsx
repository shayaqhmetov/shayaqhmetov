import { Component } from "react";

import PostCard from "../../components/PostCard/post-card.template";
import { BlogService } from "../../blog.service";

class PostsPage extends Component {
  async loadPosts() {
    const posts = await new BlogService().getPosts();
    this.setState({
      posts: posts,
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }

  componentDidMount() {
    this.loadPosts().then(() => {
      if (this.state.posts && this.state.posts.length) {
        console.log(this.state.posts);
        this.setState({
          posts: this.state.posts,
        });
      }
    });
  }

  renderPosts(posts) {
    return posts.map((post) => (
      <PostCard
        col="col-lg-4 col-md-6 col-sm-12"
        key={post.id}
        title={post.title}
        description={post.description}
        image={post.image}
      />
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.posts && this.state.posts.length ? (
            this.renderPosts(this.state.posts)
          ) : (
            <p>No posts</p>
          )}
        </div>
      </div>
    );
  }
}

export default PostsPage;
