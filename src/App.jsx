import "./App.css";
import Home from "./componentes/inicio/Home";
import Revista from "./componentes/revista/Revista";
import Memes from "./componentes/memes/Memes";
import Entrevista from "./componentes/entrevista/Entrevista";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memes/*" element={<Memes />} />
          <Route path="/revista/*" element={<Revista />} />
          <Route path="/entrevista/*" element={<Entrevista />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
