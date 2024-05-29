import React, { useState, useEffect } from 'react';
import "../App.css";

function PostForm({ post, addPost, updatePost, setIsEditing }) {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post) {
      updatePost({ ...post, title, content });
      setIsEditing(false);
    } else {
      addPost({ id: Date.now(), title, content });
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          className="form-control"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="3"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {post ? 'Update' : 'Add'} Post
      </button>
    </form>
  );
}

export default PostForm;
