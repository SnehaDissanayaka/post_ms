import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Popup from './components/Popup';
import Banner from './assets/header.jpg';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

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
    setIsEditing(false);
    setShowPopup(false);
  };

  const deletePost = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    savePosts(newPosts);
  };

  const editPost = (post) => {
    setCurrentPost(post);
    setIsEditing(true);
    setShowPopup(true);
  };

  return (
    <div className="Post-Container">
      <div className="Header-Container">
        <h1 className="Header-text">Post Management System</h1>
        <h3 className="Header-name">Sneha Dissanayake</h3>
      </div>
      <div className="Body-Container">
        <button className="btn btn-primary" onClick={() => { setShowPopup(true); setCurrentPost(null); setIsEditing(false); }}>
          Add Post
        </button>
        <PostList posts={posts} updatePost={updatePost} deletePost={deletePost} editPost={editPost} />
      </div>
      <Popup show={showPopup} onClose={() => setShowPopup(false)}>
        <PostForm
          post={currentPost}
          addPost={addPost}
          updatePost={updatePost}
          setIsEditing={setIsEditing}
          onClose={() => setShowPopup(false)}
        />
      </Popup>
    </div>
  );
}

export default App;
