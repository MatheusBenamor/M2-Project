import React from "react";
import { AnswersList } from "../components/AnswersList";

export const Answers = ({ answers }) => {
    return <div>
        <AnswersList answers={ answers }/>
    </div>
};