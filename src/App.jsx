import './App.css'
import Memes from './componentes/memes/Memes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/memes/*" element={<Memes />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App