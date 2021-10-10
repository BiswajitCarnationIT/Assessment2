import axios from "axios"

import { FETCH_COMMENT_FAILURE, FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS} from './commentsActionType'

export const fetchCommnetsRequest = () => {
    return {
        type:FETCH_COMMENT_REQUEST
    }
}

export const fetchCommnetsSuccess = (Commnets) => {
    console.log('fetchCommnetsSuccess called',Commnets)
    return {
        type: FETCH_COMMENT_SUCCESS,
        payload:Commnets
    }
}

export const fetchCommnetsFailure = (error) =>{
    return {
        type: FETCH_COMMENT_FAILURE,
        payload: error
    }
}

export const fetchCommnets = (kids) => { 
    //if(kids === "undefined" || kids.comments === "undefined") return (dispatch) =>{dispatch(fetchCommnetsRequest)} 
    //console.log('fetch comment function kids',kids.comments.length);
    console.log('fetch comment function kids',kids);
    return (dispatch) => {
        dispatch(fetchCommnetsRequest)
            if(kids && kids.comments){
                let promices = []
                for(let i = 0;i<kids.comments.length;i++){
                    const id = kids.comments[i]
                    promices[i] = axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                        
                }
                Promise.all(promices).then((values) => {
                    console.log('comments',values);
                    dispatch(fetchCommnetsSuccess(values))
                })

                //console.log(newsIndex)
            }
            
            
            
        
    }
}

