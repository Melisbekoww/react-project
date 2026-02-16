import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Страница не найдена 404 ошибка
      <Link to={"/"}>Вернутся на главную</Link>
    </div>
  );
};

export default NotFoundPage;
