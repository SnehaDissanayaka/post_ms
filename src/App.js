import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const savePosts = (posts) => {
    localStorage.setItem('posts', JSON.stringify(posts));
    setPosts(posts);
  };

  const addPost = (post) => {
    const newPosts = [...posts, post];
    savePosts(newPosts);
    setShowPopup(false);
  };

  const updatePost = (updatedPost) => {
    const newPosts = posts.map(post =>
      post.id === updatedPost.id ? updatedPost : post
    );
    savePosts(newPosts);
  };

  const deletePost = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    savePosts(newPosts);
  };

  return (
    <div className="Post-Container">
      <div className="Header-Container">
        <h1 className="Header-text">Post Management System</h1>
        <h3 className="Header-name">Sneha Dissanayake</h3>
      </div>
      <div className="Body-Container">
        <button className="btn btn-primary" onClick={() => setShowPopup(true)}>
          Add Post
        </button>
        <br />
        <PostList posts={posts} updatePost={updatePost} deletePost={deletePost} />
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <PostForm addPost={addPost} />
            <button className="close-button" onClick={() => setShowPopup(false)}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
