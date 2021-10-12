import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommnets } from "../Comments/commentAction";

import { NavLink } from "react-router-dom";

export const Comments = (kid) => {
  const commentData = useSelector((state) => state.commentReducer);
  const dispatch = useDispatch();
  //fetchComments(i,user,kids)
  //console.log('comments',parent)
  //console.log("parent id", parentID);
  const handleCommint = () => {
    //console.log("parent id", parentID);
  };
//   const array = kid.comments.kids
   //console.log(kid)
  return (
    <div>
    {/* <p>{parentID}</p> */}
      <NavLink exact activeClassName="active_class" to="/Comments">
        <button onClick={() => dispatch(fetchCommnets(kid))}>comment</button>
      </NavLink>
      
      {/* <p>{kids.comments}</p> */}
      {/* {kids.comments.map((comment) => (<h5>{comment.data.by}</h5>))} */}
      <p>
        {commentData &&
        commentData.comments[0] &&
        commentData.comments[0].data ? (
          commentData.comments[0].data.by
        ) : (
          <p>error</p>
        )}
      </p>
    </div>
  );
};
