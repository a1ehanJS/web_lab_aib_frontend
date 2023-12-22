import React from "react";
import { useLocation } from "react-router-dom";

const UsersInform = () => {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="info_page">
      <h1>Информация о персонаже</h1>
        <p className="pers_info">
        ID: {user.id}<br/>
        Имя: {user.name}<br/>
        Сторона: {user.side}<br/>
        Положение: {user.rang}<br/>
        </p>
    </div>
  );
};

export default UsersInform;