import React from "react";
import { Route, Routes } from "react-router-dom";
import ListaEntrevistas from "./ListaEntrevistas";
import Header from "../inicio/Header";
import DetalleEntrevista from "./DetalleEntrevista";

const Entrevista = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListaEntrevistas />} />
        <Route path=":id" element={<DetalleEntrevista />} />
      </Routes>
    </>
  );
};

export default Entrevista;
