import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h4>Pixabay</h4>
          <p>Бесплатные изображения, видео и музыка для любых проектов.</p>
        </div>

        <div className="footer__column">
          <h4>Контент</h4>
          <ul>
            <li>
              <Link to="/photos">Фото</Link>
            </li>
            <li>
              <Link to="/illustrations">Иллюстрации</Link>
            </li>
            <li>
              <Link to="/vectors">Векторы</Link>
            </li>
            <li>
              <Link to="/videos">Видео</Link>
            </li>
            <li>
              <Link to="/music">Музыка</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Сообщество</h4>
          <ul>
            <li>
              <Link to="/blog">Блог</Link>
            </li>
            <li>
              <Link to="/forum">Форум</Link>
            </li>
            <li>
              <Link to="/contributors">Авторы</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Компания</h4>
          <ul>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/license">Лицензия</Link>
            </li>
            <li>
              <Link to="/privacy">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} YourProject. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
