import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Ranking from './pages/Ranking';
import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <h1>Projeto Módulo 2 (Eduardo e Matheus)</h1>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ranking" element={<Ranking />}/>
      <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
