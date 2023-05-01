import React, { Fragment } from "react";

const MainSection = ({heading,text,img}) => {
    const logo=require('../../img/r4u_logo.png')
    const mainImg=require('../../img/header_background.jpg')
  return (
    <section className="main-img" style={{backgroundImage:img}}>
      <img src={logo} alt="" />
      <h1>{heading}</h1>
      <p>
        {text}
      </p>
    </section>
  );
};

export default MainSection;
