import { Component } from 'react';

import Post from '../../components/Post/post.template';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            feature: {
                big: null,
                small: []
            }
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/posts')
            .then(response => response.json())
            .then(data => this.setState({
                feature: {
                    big: data[0],
                    small: [data[1], data[2]]
                }
            }));
    }

    renderPosts(posts) {
        return posts.map((post) => <Post col='col-12'
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
        />);
    }

    render() {
        return (
            <div className='row feature-posts'>
                {this.state.feature.big ? <Post col='col-lg-6 col-md-12'
                    key={this.state.feature.big.id}
                    title={this.state.feature.big.title}
                    description={this.state.feature.big.description}
                    image={this.state.feature.big.image}
                    showtext={true}
                /> : <p>Nothing</p>}
                <div className='col-lg-6 col-md-12'>
                    <div className='row'>
                        {this.state.feature.small.length ?  this.renderPosts(this.state.feature.small): <p>No posts</p>}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;