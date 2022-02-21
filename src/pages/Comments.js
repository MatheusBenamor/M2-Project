import React, { useState } from "react";
import axios from "axios";

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
    await axios.post(
      "https://ironrest.herokuapp.com/touristDestinations",
      newComment
    );
  };

  return (
    <section>
      <p>Share your experiences with the community!</p>
      <form onSubmit={addComment}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country Name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="number"
          min="0"
          max="10"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <textarea
          placeholder="Share your experience"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

//<input type='button' value='Send' onClick={}/>
