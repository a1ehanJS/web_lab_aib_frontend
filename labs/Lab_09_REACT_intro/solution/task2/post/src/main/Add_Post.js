import React, { useState } from 'react';

const PostAdd = ({ create }) => {
    const [post, setPost] = useState({ username: '', text: '', tag: '' });

    const addNewPost = () => {
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({ username: '', text: '', tag: '' });
    }

    return (
        <div className = 'auth_fields'>
            <input
                onChange={e => setPost({ ...post, username: e.target.value })}
                value={post.username}
                type="text"
                placeholder="Имя пользователя"
            />
            <input
                onChange={e => setPost({ ...post, text: e.target.value })}
                value={post.text}
                type="text"
                placeholder="Краткая информация"
            />
            <input
                onChange={e => setPost({ ...post, tag: e.target.value })}
                value={post.tag}
                type='text'
                placeholder="Тэг"
            />
            <button id = "add_post" onClick={addNewPost}>Добавить</button>
        </div>
    );
};

export default PostAdd;