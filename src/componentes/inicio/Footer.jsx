import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul>
          <li>
            <Link to={`/`} >
            <a>Inicio</a>
            </Link>
          </li>
          <li>
          <Link to={`/revista`} >
            <a>Proyectos</a>
            </Link>
          </li>
          <li>
          <Link to={`/entrevistas`} >
            <a>Entrevistas</a>
            </Link>
          </li>
          <li>
          <Link to={`/memes`} >
            <a>Memes</a>
            </Link>
          </li>
        </ul>
        <hr></hr>
        <p>&copy; 2024 Seed Programming. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Footer;
