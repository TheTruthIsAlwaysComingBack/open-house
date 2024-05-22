import React from "react";
import { Route, Routes } from "react-router-dom";
import ListaRevista from "./ListaRevista";
import DetalleRevista from "./DetallesRevista";

const Revista = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaRevista />} />
      <Route path=":id" element={<DetalleRevista />} />
    </Routes>
  );
};

export default Revista;
