import React from "react";
import { Link } from "react-router-dom";
import "./ListaRevista.css";
import revista from "../../datos/revista.json";

const ListaRevista = () => {
  return (
    <div className="lista-revista">
      <h1>Revista OpenHouse</h1>
      <ul className="revista-contenedor-ul">
        {revista.map((revista) => (
          <li key={revista.id} className="revista-item">
            <Link to={`/revista/${revista.id}`}>
              <img
                src={revista.imagen}
                alt={revista.titulo}
                className="revista-imagen"
              />
              <div className="texto-revista">
                <p>{revista.titulo}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaRevista;
