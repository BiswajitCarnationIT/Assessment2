import { FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "./newsActionType";

const initialState = {
    loading:false,
    news:[],
    error: ''
}

const newsReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_NEWS_REQUEST:
            console.log('loading')
            return{
                loading: true,
                news:  [],
                error: ''
            }
        case FETCH_NEWS_SUCCESS:
            console.log('loaded')
            return {
                loading: false,
                news:  action.payload,
                error: ''
            }
        case FETCH_NEWS_FAILURE:
            return {
                loading: false,
                news:[],
                error:action.payload
            }
        default: return state
    }
}

export default newsReducer