import "./App.css";
import Home from "./componentes/inicio/Home";
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
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;