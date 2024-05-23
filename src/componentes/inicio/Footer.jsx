import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul>
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Proyectos</a>
          </li>
          <li>
            <a>Entrevistas</a>
          </li>
          <li>
            <a>Memes</a>
          </li>
        </ul>
        <hr></hr>
        <p>&copy; 2024 Seed Programming. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Footer;
