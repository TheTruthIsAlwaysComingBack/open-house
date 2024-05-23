import React from "react";
import "./Informacion.css";

const Informacion = () => {
  return (
    <div className="introduccion">
      <img src={"./src/assets/imagenes/banner.jpg"} alt="banner" />
      <div className="texto">
        <h2>¿QUÉ ES OPEN HOUSE?</h2>
        <p>
          El OpenHouse Carreras de Ingeniería Tecnológica es una actividad para
          la generación de proyectos de investigación asociados a las líneas de
          investigación del Diseño curricular de las Carreras de Ingeniería de
          Sistemas, Ingeniería en Sistemas Electrónicos, Ingeniería Mecatrónica
          e Ingeniería en Telecomunicaciones de la Escuela Militar de Ingeniería
          Unidad Académica La Paz.
        </p>
        <hr></hr>
        <h2>¿CUÁL ES EL OBJETIVO DEL OPEN HOUSE?</h2>
        <p>
          La finalidad es identificar proyectos representativos y de impacto que
          serán propuestos a la Unidad de Investigación Ciencia y tecnología
          para su incorporación en las líneas de investigación de la Escuela
          Militar de Ingeniería establecidas en el Plan de Investigación de la
          DNICYT.
        </p>
        <p>
          Sobre todo, el objetivo principal es fomentar a la investigación en
          base al{" "}
          <a href="https://www.emi.edu.bo/images/2023/04/rac_01_reglamento_academico_regimen_estudiantil_2019.pdf">
            RAC-01
          </a>{" "}
          CAPITULO III Articulo 19
        </p>
      </div>
    </div>
  );
};

export default Informacion;
