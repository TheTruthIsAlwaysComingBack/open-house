import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul>
          <li>
            <Link to={`/`}>Inicio</Link>
          </li>
          <li>
            <Link to={`/revista`}>Proyectos</Link>
          </li>
          <li>
          <Link to={`/entrevista`} >
            <a>Entrevistas</a>
            </Link>
          </li>
          <li>
            <Link to={`/memes`}>Memes</Link>
          </li>
        </ul>
        <hr></hr>
        <p>&copy; 2024 Seed Programming. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Footer;
