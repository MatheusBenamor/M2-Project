import React from "react";
import { AnswerCard } from "./AnswerCard";
import "../components/AnswerList.css";

export const AnswersList = ({ answers }) => {
  return (
    <>
      <div className="answer-title">
        <p> Community Comments</p>
      </div>
      <div className="answer-list">
        {answers.map((answer) => (
          <AnswerCard
            name={answer.name}
            country={answer.country}
            city={answer.city}
            score={answer.score}
            comment={answer.comment}
          />
        ))}
      </div>
    </>
  );
};
