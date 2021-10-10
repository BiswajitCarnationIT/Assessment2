import {combineReducers} from 'redux'
import commentReducer from './Comments/commentReducer';
import newsReducer from './redux/newsReducer'

const rootReducer = combineReducers({
    newsReducer : newsReducer,
    commentReducer: commentReducer
})

export default rootReducer;