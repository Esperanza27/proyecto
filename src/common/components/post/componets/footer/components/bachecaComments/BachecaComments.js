import Comment from "./components/comment";
import Review from "./components/review";

import "./BachecaComments.scss";
import { useState } from "react";

const BachecaComments = ({ commentsList = [] }) => {
  const [commentsListData, setCommentsListData] = useState(commentsList);

  const getNewComment = (comment) => {
    setCommentsListData((prev) => {
      return [...prev, { text: comment, id: prev.length + 1 }];
    });
  };
  const deleteComment = (id) => {
    const newCommentsListData = commentsListData.filter((comment) => {
      if (comment?.id !== id) {
        return comment;
      } else return null;
    });
    setCommentsListData(newCommentsListData);
    console.log(newCommentsListData);
  };

  return (
    <div className="comments-container">
      {commentsListData.map((comment, i) => {
        return (
          <div key={`comment-${i}`}>
            <Comment comment={comment} deleteComment={deleteComment} />
          </div>
        );
      })}
      <Review getNewComment={getNewComment} />
    </div>
  );
};

export default BachecaComments;
