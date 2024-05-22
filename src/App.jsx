import "./App.css";
import Memes from "./componentes/memes/Memes";
import Revista from "./componentes/revista/Revista";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/memes/*" element={<Memes />} />
            <Route path="/revista/*" element={<Revista />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
