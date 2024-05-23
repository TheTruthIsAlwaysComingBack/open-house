import "./App.css";
import Home from "./componentes/inicio/Home";
import Revista from "./componentes/revista/Revista";
import Memes from "./componentes/memes/Memes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memes/*" element={<Memes />} />
            <Route path="/revista/*" element={<Revista />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
