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
    <div className="container-detalle detalle-revista">
      <h1 className="h1">{revistas.titulo}</h1>
      <img src={revistas.imagen} alt={revistas.titulo} />
      <div className="parrafo-detalle">
        <p>{revistas.descripcion}</p>
      </div>
    </div>
  );
};

export default DetallesRevista;
