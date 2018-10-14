import React from "react";

const NewsListItem = props => {
  console.log(props);
  return (
    <div>
      <h3> {props.article.headline} </h3>
      <a href={props.article.web_url}>{props.article.web_url}</a>
      <p> {props.article.snippet} </p>
    </div>
  );
};

export default NewsListItem;
