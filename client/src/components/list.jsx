import React from "react";
import NewsListItem from "./listitem.jsx";

const NewsList = props => (
  <div>
    <h4> News published on your birthday: </h4>
    {props.news.map((article, i) => (
      <NewsListItem key={'article_'+i} article={article} />
    ))}
  </div>
);

export default NewsList;
