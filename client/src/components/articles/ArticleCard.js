import React from "react";

const ArticleCard = ({date,title,category,authors,text}) => {
  return (
    <div className="card card-article">
      <div className="card-img"></div>
      <div className="card-content">
        <small>{date}</small>
        <h1>{title}</h1>
        <small>{category}</small>
        <small>{authors}</small>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
