import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  if (!user) {
    return <p class = "waiting">Ожидание...</p>;
  }

  return (
    <div className="about_person">
      <h1>О персонаже</h1>
      <div className="pers_info">
          Имя: {user.name}<br/>
          Рост: {user.height}<br/>
          Масса: {user.mass}<br/>
          Цвет волос: {user.hair_color}<br/>
          Цвет кожи: {user.skin_color}<br/>
          Цвет глаз: {user.eye_color}<br/>
          Дата рождения: {user.birth_year}<br/>
          Пол: {user.gender}<br/>
      </div>
    </div>
  );
};

export default UserInfo;