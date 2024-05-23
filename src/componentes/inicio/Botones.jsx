import React from 'react'
import "./Botones.css"
import { Link } from "react-router-dom";


const Botones = () => {
  return (
    <div className='botones'>
        <h2>¡Te invitamos a conocer los proyectos presentados!</h2>
        <Link to={`/revista`}>
        <button> <img src={"./src/assets/imagenes/robot-arm.png"} alt="proyectos" /> </button>
        </Link>
        <hr></hr>
        <h2>Conoce las opiniones de otras personas</h2>
        <Link to={`/entrevista`}>
        <button> <img src={"./src/assets/imagenes/interview.png"} alt="entrevistas" /> </button>
        </Link>
        <hr></hr>
        <h2>Ríe un poco con nuestros memes</h2>
        <Link to={`/memes`}>
        <button> <img src={"./src/assets/imagenes/laugh.png"} alt="memes" /> </button>
        </Link>
    </div>
  )
}

export default Botones