import React, { Component } from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    error: false
  }

  componentDidMount() {
    console.log(this.props);
    axios.get('/posts')
      .then(res => {
        const posts = res.data.slice(0, 4);
        const updatePosts = posts.map(
          post => ({
            ...post,
            author: "hoang"
          })
        )
        this.setState({ posts: updatePosts });
      })
      .catch(err => {
        this.setState({ error: true })
      });
  }

  postSelectedHandler = (id) => {
    this.props.history.push({ pathname: '/posts/' + id });
    // this.props.history.push('/posts/' + id );
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(
        post => (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} />
        )
      );
    }
    return (
      <div>
        <section className="Posts" >
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;