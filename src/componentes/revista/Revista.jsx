import React from "react";
import { Route, Routes } from "react-router-dom";
import ListaRevista from "./ListaRevista";
import DetalleRevista from "./DetallesRevista";
import Header from "../inicio/Header";

const Revista = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListaRevista />} />
        <Route path=":id" element={<DetalleRevista />} />
      </Routes>
    </>
  );
};

export default Revista;
