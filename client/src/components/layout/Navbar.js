import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <h1>R4U</h1>
      <ul>
        <li className="li-active"><a href="#">Home</a></li>
        <li><a href="./articles.html">Articles</a></li>
        <li><a href="./blogs.html">Gallery</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <button className="btn btn-alt">Sign In</button>
    </nav>
  )
}

export default Navbar
