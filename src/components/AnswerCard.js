import React from "react";
import "../components/AnswerCard.css"

export const AnswerCard = ({ name, country, city, score, comment }) => {
    return <div className="comments">
        <p><b>Name:</b> {name}</p>
        <p><b>Country:</b> {country}</p>
        <p><b>City:</b> {city}</p>
        <p><b>Score:</b> {score}</p>
        <p><b>Comment:</b> {comment}</p>
    </div>
};