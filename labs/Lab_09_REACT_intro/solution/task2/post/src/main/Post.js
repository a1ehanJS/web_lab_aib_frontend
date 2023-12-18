import React, { useState } from 'react';

const Post = ({ post, remove }) => {
    const [like, setLike] = useState('default');

    const likeOnClick = () => {
        setLike('pink');
    }

    return (
        <>
          <div className = 'Post'>
            <div className = 'post__text'>
              <p id = 'username'>{post.username}</p>
              <p>{post.text}</p>
              <p>{post.tag}</p>
            </div>
            <div className = "post__button">
              <button id = "like" style={{ backgroundColor: like }} onClick={likeOnClick}>like</button>
              <button id = "delete" onClick={()=>remove(post)}>удалить</button>
            </div>
          </div>
        </>
    );
};

export default Post;