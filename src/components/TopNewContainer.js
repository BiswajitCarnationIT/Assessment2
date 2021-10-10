import React from "react";
import {
    fetchComments,
  fetchNews,
  fetchNewsFailure,
  fetchNewsRequest,
  fetchNewsSuccess,
} from "../redux/newsAction";
import { connect } from "react-redux";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Comments } from "./Comments";

const TopNewContainer = () => {
  const newsData = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();
  console.log("hi from TopContainer", newsData.news[0]);

  const commentData = useSelector((state) => state.commentReducer);
  console.log("hi from TopContainer", commentData);

  const HandleFetch = (i,user,kids) => {
    //const newsData = useSelector((state) => state.newsReducer);
    fetchComments(i,user,kids)
    
  }
  return (
    <div>
      <button onClick={() => dispatch(fetchNews())}>Top news</button>
      <h1>
        {newsData.news.map((user,i) => (
          <div className="box">
            <p>Title: {user.data.title}</p>
            <h3>Author: {user.data.by}</h3>
            <button onClick = {() => dispatch(HandleFetch(i,user,user.data.kids))}>Comments</button>
            <Comments comments = {user,user.data.kids}/>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default TopNewContainer;
