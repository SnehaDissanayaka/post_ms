import React, { useState } from 'react';
import PostForm from './PostForm';
import { MdEditSquare, MdDelete } from "react-icons/md";
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
                <h5 className="card-title poppins-medium">{post.title}</h5>
                <p className="card-text poppins-regular">{post.content}</p>
                <div className='button-container'>
                    <button className="btn action-button update" onClick={() => setIsEditing(true)}><MdEditSquare /></button>
                    <button className="btn action-button delete" onClick={() => deletePost(post.id)}><MdDelete /></button>
                </div>
                </div>
            </>
            )}
        </div>
        </div>
    );
}

export default PostItem;
