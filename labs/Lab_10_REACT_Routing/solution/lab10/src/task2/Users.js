import React from "react";
import { Link } from "react-router-dom";
import '../styles/App.css';

const users = [
  { id: 1, name: "Энакин Скайуокер", 
    side: "светлая",
    rang: "рыцырь-джедай"},
  { id: 2, name: "Оби-Ван Кеноби", 
    side: "светлая",
    rang: "рыцырь-джедай"},
  { id: 3, name: "Йода", 
    side: "светлая",
    rang: "грандмастер-джедай"},
  { id: 4, name: "Дарт Вейдер", 
    side: "темная",
    rang: "ситх"},
  { id: 5, name: "Дарт Сидиус", 
    side: "темная",
    rang: "владыка ситх"}
];

const Users = () => {
  return (
    <div className="SW_pers">
      <h1 className="pers_header">Персонажи</h1>
        <div className = "users">
          {users.map((user) => (
            <div key={user.id} className="list_pers">
              <Link className="links_users" to={`/inform/${user.id}`} state={{ user }}>
                {user.name}
              </Link>
            </div>
          ))}
        </div>
      </div> 
    );
  };

export default Users;