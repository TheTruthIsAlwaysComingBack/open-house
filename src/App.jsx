import React from "react";
import "./App.css";
import Home from "./componentes/inicio/Home";
import Revista from "./componentes/revista/Revista";
import Memes from "./componentes/memes/Memes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Entrevista from "./componentes/entrevista/Entrevista";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memes/*" element={<Memes />} />
          <Route path="/revista/*" element={<Revista />} />
          <Route path="/entrevistas/*" element={<Entrevista/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
