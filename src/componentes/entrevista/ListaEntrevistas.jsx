import React from "react";
import './ListaEntrevistas.css';
import entrevista from "../../datos/entrevista.json";
import { Link } from "react-router-dom";

const ListaEntrevistas = () => {
  return (
    <div className="lista-entrevistas">
      <h1>Entrevistas</h1>
      <ul className="entrevistas-contenedor-ul">
        {entrevista.map((entrevista) => (
          <li key={entrevista.id} className="entrevista-item">
            <Link to={`/entrevista/${entrevista.id}`}>
              <video
                src={entrevista.video}
                alt={entrevista.titulo}
                className="entrevista-preview"
                controls
              />
              <div className="titulo-entrevista">
                <p>{entrevista.titulo}</p>
                <p>Duración: {entrevista.duracion}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaEntrevistas;
