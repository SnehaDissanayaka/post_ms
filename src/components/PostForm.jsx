import React, { useState, useEffect } from 'react';
import { TiArrowBack } from "react-icons/ti";
import { IoIosSave } from "react-icons/io";
import { RiChatUploadFill } from "react-icons/ri";
import "../App.css";

function PostForm({ post, addPost, updatePost, setIsEditing, onClose }) {
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
        <div className="form-group poppins-regular">
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
        <div className='button-container'>
            <button type="submit" className="btn primary action-button">
                {post ? <IoIosSave /> : <RiChatUploadFill />}
            </button>
            <button onClick={onClose} className="btn delete action-button">
                <TiArrowBack />
            </button>
        </div>
        </form>
    );
}

export default PostForm;
