import React from "react";
import "./Header.css";
import imagenes from "../../datos/inicio.json"

const Header = () => {
  const {
    "Isologos-Ingenieria-Sistemas-Electronicos": electronica,
    "Isologos-Ingenieria-Sistemas": sistemas,
    "Isologos-Ingenieria-Telecomunicaciones": telecomunicacion,
    "Isologos-Ingenieria-Mecatronica": mecatronica,
    "logo-emi": emi
  } = imagenes.imagenes.reduce((acc, img) => {
    acc[img.nombre] = img;
    return acc;
  }, {});

  return (
    <div>
      <header>
        <div className="logos-carreras">
          <img src={electronica.src} alt={electronica.alt} />
          <img src={sistemas.src} alt={sistemas.alt} />
          <img className="emi" src={emi.src} alt={emi.alt} />
          <img src={telecomunicacion.src} alt={telecomunicacion.alt} />
          <img src={mecatronica.src} alt={mecatronica.alt} />
        </div>
      </header>
    </div>
  );
};

export default Header;
