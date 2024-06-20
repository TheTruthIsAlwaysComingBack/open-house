import React from "react";
import "./Botones.css";
import { Link } from "react-router-dom";
import imagenes from "../../datos/inicio.json"

const Botones = () => {
  const { interview, laugh, "robot-arm": robotArm } = imagenes.imagenes.reduce((acc, img) => {
    acc[img.nombre] = img;
    return acc;
  }, {});

  return (
    <div className="botones">
      <h2>¡Te invitamos a conocer los proyectos presentados!</h2>
      <Link to={`/revista`}>
        <button>
          <img src={robotArm.src} alt={robotArm.alt} />
        </button>
      </Link>
      <hr></hr>
      <h2>Conoce las opiniones de otras personas</h2>
      <Link to={`/entrevista`}>
        <button>
          <img src={interview.src} alt={interview.alt} />
        </button>
      </Link>
      <hr></hr>
      <h2>Ríe un poco con nuestros memes</h2>
      <Link to={`/memes`}>
        <button>
          <img src={laugh.src} alt={laugh.alt} />
        </button>
      </Link>
    </div>
  );
};

export default Botones;
