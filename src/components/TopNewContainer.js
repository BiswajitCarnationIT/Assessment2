import React from "react";
import { fetchNews } from "../redux/newsAction";

import { useSelector, useDispatch } from "react-redux";
import { Comments } from "./Comments";

const TopNewContainer = () => {
  const newsData = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();

  if (newsData.news && newsData.news.data && newsData.news.data.time)
    newsData.news.sort((a, b) => (a.data.time > b.data.time ? 1 : -1));

  return (
    <div>
      <button className="mainButton" onClick={() => dispatch(fetchNews())}>
        Top news
      </button>
      {!newsData ? null : !newsData.news[0] ? (
        <>
          <p>Click and wait untit it gets loaded</p>
          <p>News feeds will appeare here within a munite after click</p>
        </>
      ) : null}

      <h1>
        {!newsData ? (
          <p>Error Loading News</p>
        ) : !newsData.news ? (
          <p>Error Loading News</p>
        ) : (
          newsData.news.map((user, i) => (
            <div className="box">
              <h6>
                Title: {user.data.title} id: {user.data.id} (Score :{" "}
                {user.data.score})
              </h6>
              <h6>Author: {user.data.by} </h6>
              <Comments comments={user.data} />
            </div>
          ))
        )}
      </h1>
    </div>
  );
};

export default TopNewContainer;
