import React from "react";
import {
  fetchNews,
  fetchNewsFailure,
  fetchNewsRequest,
  fetchNewsSuccess,
} from "../redux/newsAction";
import { connect } from "react-redux";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const TopNewContainer = () => {
  const newsData = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();
  console.log("hi from TopContainer", newsData.news[0]);

  return (
    <div>
      <button onClick={() => dispatch(fetchNews())}>Top news</button>
      <h1>
        {newsData.news.map((user) => (
          <div className="box">
            <p>Title: {user.data.title}</p>
            <h3>Author: {user.data.by}</h3>
            <button>Comments</button>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default TopNewContainer;
