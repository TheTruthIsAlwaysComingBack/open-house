import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header>
        <div className="logos-carreras">
          <img
            src={
              "./src/assets/imagenes/Isologos-Ingenieria-Sistemas-Electronicos.png"
            }
            alt="electronica"
          />
          <img
            src={"./src/assets/imagenes/Isologos-Ingenieria-Sistemas.png"}
            alt="sistemas"
          />
          <img class="emi" src={"src/assets/imagenes/logo_emi.png"} alt="emi" />
          <img
            src={
              "src/assets/imagenes/Isologos-Ingenieria-Telecomunicaciones.png"
            }
            alt="telecomunicacion"
          />
          <img
            src={"src/assets/imagenes/Isologos-Ingenieria-Mecatronica.png"}
            alt="mecatronica"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
