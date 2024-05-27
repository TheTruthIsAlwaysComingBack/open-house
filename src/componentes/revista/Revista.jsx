import React from "react";
import { Route, Routes } from "react-router-dom";
import ListaRevista from "./ListaRevista";
import DetalleRevista from "./DetallesRevista";
import Header from "../inicio/Header";
import Footer from "../inicio/Footer";
import "./Revista.css";

const Revista = () => {
  return (
    <>
      <div className="revistaa">
        <Header />
        <Routes>
          <Route path="/" element={<ListaRevista />} />
          <Route path=":id" element={<DetalleRevista />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Revista;
