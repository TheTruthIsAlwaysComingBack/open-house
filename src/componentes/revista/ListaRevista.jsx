import React from "react";
import { Link } from "react-router-dom";
import "./ListaRevista.css";
import revista from "../../datos/revista.json";

const ListaRevista = () => {
  return (
    <div className="lista-revista">
      <h1>revista</h1>
      <ul>
        {revista.map((revista) => (
          <li key={revista.id} className="revista-item">
            <Link to={`/revista/${revista.id}`}>
              <img
                src={revista.imagen}
                alt={revista.titulo}
                className="revista-imagen"
              />
              <p>{revista.titulo}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaRevista;
