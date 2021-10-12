import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommnets } from "../Comments/commentAction";

import { NavLink } from "react-router-dom";

export const Comments = (kid) => {
  const commentData = useSelector((state) => state.commentReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <NavLink exact activeClassName="active_class" to="/Comments">
        <button onClick={() => dispatch(fetchCommnets(kid))}>comment</button>
      </NavLink>

      <p>
        {commentData &&
        commentData.comments[0] &&
        commentData.comments[0].data ? (
          commentData.comments[0].data.by
        ) : (
          <p></p>
        )}
      </p>
    </div>
  );
};
