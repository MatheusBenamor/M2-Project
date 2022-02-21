import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/Comments.css";
import TravelGlobe from "../TravelGlobe.png";

//Formulário

export const CommentsForm = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

  const addComment = async (e) => {
    e.preventDefault();
    const newComment = {
      name,
      country,
      city,
      score: Number(score),
      comment,
    };
    await axios.post("https://ironrest.herokuapp.com/newComments", newComment);
  };

  return (
    <section className="comment-box">
      
      <form class="w3-container w3-card-4 w3-light-grey" onSubmit={addComment}>
      <p>Share your experiences with the community!</p>
        <input class="w3-input w3-border w3-round-large"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p></p>
        <input class="w3-input w3-border w3-round-large"
          type="text"
          placeholder="Country Name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <p></p>
        <input class="w3-input w3-border w3-round-large"
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <p></p>
        <input class="w3-input w3-border w3-round-large"
          type="number"
          min="0"
          max="10"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <p></p>
        <textarea 
          placeholder="Share your experience"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <p></p>
        <button type="submit">Send</button>
      </form>

      <img src={TravelGlobe} className="globe-img" alt="globe-img" />
    </section>
  );
};

//Lista
<div>
<h1>A Lista de Comentários vai Aqui</h1>
</div>

export const CommentsList = ({commentsList, getComments}) => {

  useEffect(() => {
    getComments();
  }, []);

  return (
      <section>
      <h1>A Lista de Comentários vai Aqui</h1>
      <>
      <div>
      {commentsList.length > 0 ? (
    <p>
    {commentsList[1].name};
    </p>
    ) : (
            "loading comment"
          )}
    </div>
    </>
    </section>
  ); 
};

//<input type='button' value='Send' onClick={}/>
