import React from "react";
import { useSelector } from "react-redux";

const CommentPage = () => {
  const commentAndParentData = useSelector((state) => state.commentReducer);
  const commentData = commentAndParentData.comments;
  console.log(commentAndParentData.comments.parentObj);
  return (
    <div id="commentFullPage">
      {commentAndParentData &&
        commentAndParentData.comments &&
        commentAndParentData.comments.parentObj && (
          <div id="TitleHeader">
            <p>Title: {commentAndParentData.comments.parentObj.title}</p>
            <p>Authored by: {commentAndParentData.comments.parentObj.by}</p>
          </div>
        )}
      <p>
        {commentAndParentData &&
          commentData &&
          commentData.comments &&
          commentData.comments.map((comment) => (
            <div id="EachComments">
              <h5>Comment by: {comment.data.by}</h5>
              <h5>Comment : {comment.data.text}</h5>
            </div>
          ))}
      </p>
    </div>
  );
};

export default CommentPage;
