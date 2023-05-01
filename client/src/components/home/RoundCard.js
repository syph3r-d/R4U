import React from "react";

const RoundCard = ({heading,text}) => {
  return (
    <div class="card-round">
      <div class="card-round-img"></div>
      <div class="card-content">
        <h1 class="text-primary">{heading}</h1>
        <p>
          {text}
        </p>
        <button class="btn btn-blue">JOIN US</button>
      </div>
    </div>
  );
};

export default RoundCard;
