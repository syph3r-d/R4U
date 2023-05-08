import React, { Fragment } from "react";
import NewsCards from "./NewsCards";
import RoundCard from "./RoundCard";
import MainSection from "../layout/MainSection";
import headerBackground from '../../img/header_background.jpg'

const Home = () => {
  return (
    <Fragment>
        <MainSection img={`url(${headerBackground})`}/>
      <div className="section cards-view">
        <NewsCards topic='RESEARCH OF UNDERGRADUATES CLUBS' text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            tempora, fugit sed, sunt expedita error iure, voluptas consequatur
            doloribus maiores voluptatibus a. Doloremque perferendis iste
            dolorum fugiat! Natus, illum mollitia.' />
        <NewsCards topic='RESEARCH OF UNDERGRADUATES CLUBS' text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            tempora, fugit sed, sunt expedita error iure, voluptas consequatur
            doloribus maiores voluptatibus a. Doloremque perferendis iste
            dolorum fugiat! Natus, illum mollitia.' />
      </div>
      <section className="breaker">
        <h1>
          <span>What We do</span>
        </h1>
      </section>
      <section className="round-cards-view">
        <RoundCard heading='RESEARCH OF UNDERGRADUATES CLUBS' text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            tempora, fugit sed, sunt expedita error iure, voluptas consequatur
            doloribus maiores voluptatibus a. Doloremque perferendis iste
            dolorum fugiat! Natus, illum mollitia.' />
        <RoundCard heading='RESEARCH OF UNDERGRADUATES CLUBS' text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            tempora, fugit sed, sunt expedita error iure, voluptas consequatur
            doloribus maiores voluptatibus a. Doloremque perferendis iste
            dolorum fugiat! Natus, illum mollitia.' />
        <RoundCard heading='RESEARCH OF UNDERGRADUATES CLUBS' text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            tempora, fugit sed, sunt expedita error iure, voluptas consequatur
            doloribus maiores voluptatibus a. Doloremque perferendis iste
            dolorum fugiat! Natus, illum mollitia.' />
        <RoundCard heading='RESEARCH OF UNDERGRADUATES CLUBS' text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            tempora, fugit sed, sunt expedita error iure, voluptas consequatur
            doloribus maiores voluptatibus a. Doloremque perferendis iste
            dolorum fugiat! Natus, illum mollitia.' />
      </section>
    </Fragment>
  );
};

export default Home;
