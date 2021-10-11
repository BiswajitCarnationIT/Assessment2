import { FETCH_COMMENT_FAILURE, FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS } from "./commentsActionType"

const initialState = {
    parentId:0,
    loading:false,
    comments:[],
    error: ''
}

const commentReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_COMMENT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_COMMENT_SUCCESS:
            return {
                loading: false,
                comments:  action.payload,
                error: ''
            }
        case FETCH_COMMENT_FAILURE:
            return {
                loading: false,
                comments:[],
                error:action.payload
            }
        default: return state
    }
}

export default commentReducer