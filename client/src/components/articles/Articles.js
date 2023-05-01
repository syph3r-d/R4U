import React, { Fragment } from "react";
import ArticleCard from "./ArticleCard";
import MainSection from "../layout/MainSection";
import headerBackground from "../../img/header_background.jpg";

const Articles = () => {
  return (
    <Fragment>
      <MainSection img={`url(${headerBackground})`} />
      <section class="tabs">
        <div class="tab tab-primary">Explore Content</div>
        <div class="tab tab-secondary">Topic</div>
        <div class="tab tab-secondary">Category</div>
      </section>
      <section class="articles">
        <ArticleCard
          date="12/12/2020"
          title="Article 1"
          category="Category 1"
          authors="Author 1"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        />
        <ArticleCard
          date="12/12/2020"
          title="Article 1"
          category="Category 1"
          authors="Author 1"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        />
        <ArticleCard
          date="12/12/2020"
          title="Article 1"
          category="Category 1"
          authors="Author 1"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        />
        <ArticleCard
          date="12/12/2020"
          title="Article 1"
          category="Category 1"
          authors="Author 1"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        />
      </section>
    </Fragment>
  );
};

export default Articles;
