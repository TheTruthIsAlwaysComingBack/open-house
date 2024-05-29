import React from "react";
import { useParams } from "react-router-dom";
import entrevista from "../../datos/entrevista.json";
import "./DetalleEntrevista.css";

const DetalleEntrevista = () => {
  const { id } = useParams();
  const entrevistaEncontrada = entrevista.find((m) => m.id === id);

  if (!entrevistaEncontrada) {
    return <div>Entrevista no encontrada</div>;
  }

  return (
    <div className="detalles-entrevista">
      <h1 className="titulo-entrevista">{entrevistaEncontrada.titulo}</h1>
      <div className="contenedor-video">
        <iframe
          src={`https://streamable.com/e/${entrevistaEncontrada.video.split('/').pop()}`}
          title={entrevistaEncontrada.titulo}
          className="entrevista-preview"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DetalleEntrevista;
