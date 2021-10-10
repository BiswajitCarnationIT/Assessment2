import axios from "axios"
import { FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "./newsActionType"


export const fetchNewsRequest = () => {
    return {
        type:FETCH_NEWS_REQUEST
    }
}

export const fetchNewsSuccess = (news) => {
    console.log('fetchNewsSuccess called',news)
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
        let promices = []
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(response => {
            const newsIndex = response.data

            for(let i = 0;i<90;i++){
                const id = newsIndex[i]
                promices[i] = axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                    
            }
            Promise.all(promices).then((values) => {
                console.log('values',values);
                dispatch(fetchNewsSuccess(values))
            })

            //console.log(newsIndex)
            
            
        })
        .catch(error => {
            const errorMsg = error.message
            console.log('url error response',errorMsg);
            dispatch(fetchNewsFailure(error))
        })
    }
}

export const fetchComments = (index,ParentId,kids) => {
    return function(dispatch) {console.log('index',index,' ' ,ParentId,'kids',kids)}

}