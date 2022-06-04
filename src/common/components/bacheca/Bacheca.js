import { useState, useEffect } from "react";
import Post from "../post/Post";

// styles
import "./Bacheca.scss";

// services
import postService from "./services/postService";

const Bacheca = () => {
  const [postsList, setPostsList] = useState();

  useEffect(() => {
    postService({ setPost: (post) => setPostsList(post) });

  }, []);

  console.log(postsList);

  
  return (
    <div className="container-bacheca">
      {postsList ? <PostList postsList={postsList} /> : <Placeholder />}
    </div>
  );
};
export default Bacheca;

const Placeholder = () => {
  return <h1>Loading...</h1>;
};

const PostList = ({ postsList = [] }) => {
  return (
    <>
      {postsList.map((post, i) => {
        return (
          <div key={i}>
            <Post post={post} />
          </div>
        );
      })}
    </>
  );
};