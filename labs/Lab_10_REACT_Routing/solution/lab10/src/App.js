import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Main from './task3/Users';
import About from './About';
import UsersInform from './task3/UsersInform';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className = "navigation">
          <Link id = "main" to = "/main">Главная</Link>
          <Link id = "about" to = "/about">О нас</Link>
        </nav>
        <Routes>
          <Route path = "/main" element = {<Main/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/inform/:id" element = {<UsersInform/>}/>
          <Route path = "/info/:id" element = {<UsersInform/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;