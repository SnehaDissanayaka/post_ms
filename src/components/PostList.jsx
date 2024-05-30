import React from 'react';
import PostItem from './PostItem';

function PostList({ posts, updatePost, deletePost }) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {posts.map(post => (
            <PostItem
            key={post.id}
            post={post}
            updatePost={updatePost}
            deletePost={deletePost}
            />
        ))}
        </div>
    );
}

export default PostList;
