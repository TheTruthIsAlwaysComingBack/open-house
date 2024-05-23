import React from "react";
import { useParams } from "react-router-dom";
import "./DetallesRevista.css";
import revista from "../../datos/revista.json";

const DetallesRevista = () => {
  const { id } = useParams();
  const revistas = revista.find((m) => m.id === parseInt(id));

  if (!revistas) {
    return <div>revista no encontrado</div>;
  }

  return (
    <div className="detalle-revista">
      <h1>{revistas.titulo}</h1>
      <img
        src={revistas.imagen}
        alt={revistas.titulo}
        className="revista-imagen"
      />
      <p>{revistas.descripcion}</p>
    </div>
  );
};

export default DetallesRevista;
