import React, { useState } from "react";
import PostList from "./main/ListofPosts";
import "./styles/App.css";
import PostAdd from "./main/Add_Post";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, username: 'Джеймс Хетфилд', text: 'Фронтмен и ритм-гитарист группы Metallica', tag: '#metallica_boy' },
    { id: 2, username: 'Юрий Каспарян', text: 'Соло-гитарист группы КИНО', tag: '#kinoman' },
    { id: 3, username: 'Клаус Майне', text: 'Вокалист группы Scorpions', tag: '#great_singer' },
  ]);

  const [orPosts, setOrPosts] = useState([...posts]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setOrPosts([...orPosts, newPost]);
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
    setOrPosts(orPosts.filter(p => p.id !== post.id));
  }

  const sortedByTags = tag => {
    setPosts(posts.filter(p => p.tag === tag));
  }

  const showAll = posts => {
    setPosts([...posts]);
  }

  return (
    <div className="App">
      <PostAdd create={createPost} />
      {posts.length !== 0
        ? <PostList orPosts={orPosts} show={showAll} sort={sortedByTags} remove={removePost} posts={posts} title='Опубликованные посты' />
        : <>Посты не найдены</>
      }
    </div>
  );
}

export default App;