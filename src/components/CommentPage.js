import React from "react";
import { useSelector } from "react-redux";

const CommentPage = () => {
  const commentAndParentData = useSelector((state) => state.commentReducer);
  const commentData = commentAndParentData.comments;
  return (
    <div id="commentFullPage">
      {!commentAndParentData ? (
        <p>No Comment</p>
      ) : !commentAndParentData.comments ? (
        <p>No Comment</p>
      ) : !commentAndParentData.comments.parentObj ? (
        <p>Loading Comments</p>
      ) : (
        <div id="TitleHeader">
          <p>
            Title:{" "}
            {commentAndParentData.comments.parentObj.title ? (
              commentAndParentData.comments.parentObj.title
            ) : (
              <p>No Title</p>
            )}
          </p>
          <p>
            Authored by:{" "}
            {commentAndParentData.comments.parentObj.by ? (
              commentAndParentData.comments.parentObj.by
            ) : (
              <p>Unknown Author</p>
            )}
          </p>
        </div>
      )}
      <p>
        {!commentAndParentData ? (
          <p>No Information</p>
        ) : !commentData ? (
          <p>No comment</p>
        ) : !commentData.comments ? (
          <p></p>
        ) : (
          commentData.comments.map((comment) => (
            <div id="EachComments">
              <h5>
                Comment by:{" "}
                {!comment.data ? null : comment.data.by ? (
                  comment.data.by
                ) : (
                  <p>Unknown</p>
                )}
              </h5>
              <h5>
                Comment :{" "}
                {!comment.data ? null : comment.data.text ? (
                  comment.data.text
                ) : (
                  <p></p>
                )}
              </h5>
            </div>
          ))
        )}
      </p>
    </div>
  );
};

export default CommentPage;
