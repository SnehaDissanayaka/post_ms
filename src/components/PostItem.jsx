import React, { useState } from 'react';
import PostForm from './PostForm';
import "../App.css";

function PostItem({ post, updatePost, deletePost }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="col">
      <div className="card">
        {isEditing ? (
          <div className="card-body">
            <PostForm post={post} updatePost={updatePost} setIsEditing={setIsEditing} />
          </div>
        ) : (
          <>
            
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
              <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit</button>
              <button className="btn btn-danger" onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PostItem;
