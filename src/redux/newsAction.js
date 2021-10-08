import axios from "axios"
import { FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "./newsActionType"


export const fetchNewsRequest = () => {
    return {
        type:FETCH_NEWS_REQUEST
    }
}

export const fetchNewsSuccess = (news) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload:news
    }
}

export const fetchNewsFailure = (error) =>{
    return {
        type: FETCH_NEWS_FAILURE,
        payload: error
    }
}

export const fetchNews = () => {
    console.log('fetch function');
    return (dispatch) => {
        dispatch(fetchNewsRequest)
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(response => {
            const news = response.data
            console.log('url response',news);
            dispatch(fetchNewsSuccess(news))
        })
        .catch(error => {
            const errorMsg = error.message
            console.log('url error response',errorMsg);
            dispatch(fetchNewsFailure(error))
        })
    }
}