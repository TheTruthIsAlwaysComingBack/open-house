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
      <h1>{entrevistaEncontrada.titulo}</h1>
      <div className="contenedor-video">
        <video
          src={entrevistaEncontrada.video}
          className="entrevista-preview"
          controls
          autoPlay  
        />
      </div>
    </div>
  );
};

export default DetalleEntrevista;
