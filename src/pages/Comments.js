import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/Comments.css";
import TravelGlobe from "../TravelGlobe.png";

//Formulário

export const CommentsPage = ({commentsList, getComments}) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getComments();
  }, []);

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
      <>
    <section className="comment-box">
      
      <form className="w3-container w3-card-4 w3-light-grey" onSubmit={addComment}>
      <p>Share your experiences with the community!</p>
        <input className="w3-input w3-border w3-round-large"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p></p>
        <input className="w3-input w3-border w3-round-large"
          type="text"
          placeholder="Country Name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <p></p>
        <input className="w3-input w3-border w3-round-large"
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <p></p>
        <input className="w3-input w3-border w3-round-large"
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
    <section>
      <p className="comments-title">Community comments</p>
      <>
      <div>
      {commentsList.length > 0 ? (
        <>
        <div className="comments-container">
    <div className="comments">
    <p>Name: {commentsList[0].name};</p>
    <p>Country: {commentsList[0].country};</p>
    <p>City: {commentsList[0].city};</p>
    <p>Score: {commentsList[0].score};</p>
    <p>Comment: {commentsList[0].comment};</p>
    </div>
    <br></br>
    <div className="comments">
    <p>Name: {commentsList[1].name};</p>
    <p>Country: {commentsList[1].country};</p>
    <p>City: {commentsList[1].city};</p>
    <p>Score: {commentsList[1].score};</p>
    <p>Comment: {commentsList[1].comment};</p>
    </div>
    <br></br>
    <div className="comments">
    <p>Name: {commentsList[2].name};</p>
    <p>Country: {commentsList[2].country};</p>
    <p>City: {commentsList[2].city};</p>
    <p>Score: {commentsList[2].score};</p>
    <p>Comment: {commentsList[2].comment};</p>
    </div>
    </div>
    </>
    ) : (
            "loading comment"
          )}
    </div>
    </>
    </section>
    </>
  );

};


//{commentsList[1].name};



