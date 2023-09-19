// CommentList.jsx
import React from "react";
import "./commentList.scss";

const CommentList = ({comments = [], currentIndex}) => {
  // Check if comments is defined and is an array before filtering
  if (!Array.isArray(comments)) {
    return null; // Return nothing if comments is not an array
  }

  // Filter comments to display only those matching the current index
  const filteredComments = comments.filter(
    (comment) => comment.index === currentIndex
  );
  console.log(filteredComments);

  return (
    <div>
      <ul>
        <h2>Comments</h2>
        {filteredComments.map((comment, index) => (
          <li key={index} className="comment-list">
            <strong>{comment.name}*</strong> <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
