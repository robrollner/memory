import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card z-depth-5 card-image">
    <div className="img-container" dataid={props.id} onClick={() => props.randomRender(props.id)}>
      <img alt={props.name} src={props.image}/>
    </div>   
  </div>
);

export default FriendCard;
