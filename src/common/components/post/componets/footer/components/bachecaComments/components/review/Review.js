
/* import { useState } from "react"; */

import "./Review.scss";

const Review = ({ getNewComment }) => {

  const submit = (e) => {
    e.preventDefault();
    getNewComment(e.target[0].value);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" size="50"></input>
        <button type="submit">
          click
        </button>
      </form>
    </div>
  );
};
export default Review;
