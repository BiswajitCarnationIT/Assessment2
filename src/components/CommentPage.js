import React from "react";
import { useSelector } from "react-redux";

const CommentPage = () => {
  const commentData = useSelector((state) => state.commentReducer);
  return (
    <div>
      <p>
        {commentData &&
        commentData.comments[0] &&
        commentData.comments[0].data ? (
          commentData.comments.map((comment) => (<div id = "EachComments"><h5>Comment by: {comment.data.by}</h5><h5>Comment : {comment.data.text}</h5></div>))
        ) : (
          <p>error</p>
        )}
      </p>
    </div>
  );
};

export default CommentPage;
