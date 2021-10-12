import axios from "axios";
import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
} from "./newsActionType";

export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

export const fetchNewsSuccess = (news) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  };
};

export const fetchNewsFailure = (error) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  };
};

export const fetchNews = () => {
  return (dispatch) => {
    dispatch(fetchNewsRequest);
    let promices = [];
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((response) => {
        const newsIndex = response.data;
        dispatch(fetchNewsRequest);
        for (let i = 0; i < 90; i++) {
          const id = newsIndex[i];
          promices[i] = axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          );
        }
        Promise.all(promices).then((values) => {
          dispatch(fetchNewsSuccess(values));
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchNewsFailure(error));
      });
  };
};
