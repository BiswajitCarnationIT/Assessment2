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
  //console.log("hi from TopContainer", newsData.news[0]);

  const commentData = useSelector((state) => state.commentReducer);
  //console.log("hi from TopContainer", commentData);

  const HandleFetch = (i,user,kids) => {
    //const newsData = useSelector((state) => state.newsReducer);
    fetchComments(i,user,kids)
    
  }
  //newsData.news[i]
  //newsData.news.sort((a, b) => (a.data.time > b.data.timer) ? 1 : -1)
  newsData.news.sort((a, b) => (a.data.time > b.data.timer) ? 1 : -1)
  let d='a'
  const date=(time)=>{
    console.log(time)
      d =new  Date(time)
      console.log(d)
  }
  //date()
  console.log(d)
  return (
    <div>
      <button onClick={() => dispatch(fetchNews())}>Top news</button>
      <h1>
        {newsData.news.map((user,i) => (
          <div className="box">
            
            <h6>Title: {user.data.title} id: {user.data.id}  (Score : {user.data.score}) time:{date(user.data.time)}</h6>
            <h6>Author: {user.data.by} </h6>
            {/* <button onClick = {() => dispatch(()=>fetchComments(i,user,user.data.kids))}>Comments</button> */}
            <Comments comments = {user.data} />
          </div>
        ))}
      </h1>
    </div>
  );
};

export default TopNewContainer;
