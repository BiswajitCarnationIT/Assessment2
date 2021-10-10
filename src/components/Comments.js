import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommnets } from "../Comments/commentAction";

export const Comments = (kids) => {
    const commentData = useSelector((state) => state.commentReducer);
    const dispatch = useDispatch();
    //fetchComments(i,user,kids)
    //console.log('comments',parent)
    const handleCommint = () =>{
        console.log('comments',kids)
    }
    
    return (
        <div>
        <button onClick={() => dispatch(fetchCommnets(kids))}>
            comment
        </button>
        {/* <p>{kids.comments}</p> */} 
        {/* {kids.comments.map((comment) => (<h5>{comment.data.by}</h5>))} */}
        <p>{(commentData && commentData.comments[0] && commentData.comments[0].data) ? commentData.comments[0].data.by : <p>error ha bhai re</p>}</p>
        </div>
    )
}