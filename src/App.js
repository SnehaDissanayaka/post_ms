import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Popup from './components/Popup';
import { IoMdAddCircle } from "react-icons/io";
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

    if(window.confirm("Do you really want to delete this Post ?")==true){
      const newPosts = posts.filter(post => post.id !== id);
      savePosts(newPosts);
    }

  };

  const editPost = (post) => {
    setCurrentPost(post);
    setIsEditing(true);
    setShowPopup(true);
  };

  return (
    <div className="Post-Container">
      <div className="Header-Container poppins-semibold">
        <h2 className="Header-text">Post Management System</h2>
        <h4 className="Header-name">Sneha Dissanayake</h4>
      </div>
      <div className="Body-Container">
        <button className="btn add-post poppins-semibold" onClick={() => { setShowPopup(true); setCurrentPost(null); setIsEditing(false); }}>
          <span className="add-icon"><IoMdAddCircle /></span> Create Post
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
