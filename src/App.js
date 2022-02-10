import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Ranking from './pages/Ranking';
import About from './pages/About';
import Home from './pages/Home';
import AllCities from './pages/AllCities';
import Comments from './pages/Comments';
import axios from 'axios';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cities" element={<AllCities />}/>
      <Route path="/ranking" element={<Ranking />}/>
      <Route path="/comments" element={<Comments />}/>
      <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
