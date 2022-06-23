import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Ranking from './pages/Ranking';
import About from './pages/About';
//import Home from './pages/Home';
import DestinationDetails from './components/DestinationDetails';
import AllCities from './pages/AllCities';
import { CommentsPage } from './pages/Comments';
import { Answers } from './pages/Answers';
import axios from 'axios';


function App() {

  const [destinations, setDestinations] = useState([]);

  const getDestinations = async () => {
    const { data } = await axios.get('https://ironrest.herokuapp.com/touristDestinations')
    setDestinations(data)
  }

  const [commentsList, setCommentsList] = useState([]);

  const getComments = async () => {
    const { data } = await axios.get(
      "https://ironrest.herokuapp.com/newComments"
    )
    setCommentsList(data);
  };

  const [answers, setAnswers] = useState([]);

  const getAnswers = async () => {
  const { data } = await axios.get(
    "https://ironrest.herokuapp.com/newComments")
  setAnswers(data);
}

useEffect(() =>{
  getAnswers()
},[])

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<AllCities destinations={destinations} getDestinations={getDestinations}/>}/>
      <Route path="/cities" element={<AllCities destinations={destinations} getDestinations={getDestinations}/>}/>
      <Route path="/ranking" element={<Ranking destinations={destinations} getDestinations={getDestinations}/>}/>
      <Route path="/comments" element={<CommentsPage commentsList={commentsList} getComments={getComments}/>}/>
      <Route path="/destination/:id" element={<DestinationDetails />}/>
      <Route path="/answers" element={<Answers answers={ answers }/>}/>
      <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

//<Route path="/" element={<Home destinations={destinations} getDestinations={getDestinations} />} />

export default App;
