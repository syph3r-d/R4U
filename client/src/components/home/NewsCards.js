import React from 'react'

const NewsCards = ({topic,text}) => {
  return (
    <div class="card card-news">
        <div class="card-content">
          <h1 class="text-primary">{topic}</h1>
          <p>
            {text}
          </p>
          <button class="btn btn-blue">JOIN US</button>
        </div>
        <div class="card-img"></div>
      </div>
  )
}

export default NewsCards
