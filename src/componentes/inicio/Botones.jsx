import React from 'react'
import "./Botones.css"

const Botones = () => {
  return (
    <div className='botones'>
        <h2>¡Te invitamos a conocer los proyectos presentados!</h2>
        <button> <img src={"./src/assets/imagenes/robot-arm.png"} alt="proyectos" /> </button>
        <hr></hr>
        <h2>Conoce las opiniones de otras personas</h2>
        <button> <img src={"./src/assets/imagenes/interview.png"} alt="entrevistas" /> </button>
        <hr></hr>
        <h2>Ríe un poco con nuestros memes</h2>
        <button> <img src={"./src/assets/imagenes/laugh.png"} alt="memes" /> </button>
    </div>
  )
}

export default Botones