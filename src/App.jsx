import "./App.css";
import Memes from "./componentes/memes/Memes";
import Home from "./componentes/inicio/Home";
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
