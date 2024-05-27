import React from "react";
import "./ListaEntrevistas.css";
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
              <div className="video-container">
                <img
                  src={`https://cdn-cf-east.streamable.com/image/${entrevista.video
                    .split("/")
                    .pop()}.jpg`}
                  alt={entrevista.titulo}
                  className="entrevista-preview"
                />
              </div>
              <div className="titulo-entrevista">
                <p>{entrevista.titulo}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaEntrevistas;
