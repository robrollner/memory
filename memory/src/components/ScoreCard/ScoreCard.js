import React from "react";
import "./ScoreCard.css";

const ScoreCard = props => (
    <div className="score">
        <h6>Score: {props.score}  High Score: {props.hiScore}</h6>
    </div>
);

export default ScoreCard;