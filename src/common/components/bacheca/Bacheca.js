import { useState, useEffect } from "react";
import Post from "../post/Post";
import Stories from "../stories/Stories";

// styles
import "./Bacheca.scss";

// services
import postService from "./services/postService";
import storiesServices from "../stories/services/storiesServices";

const Bacheca = () => {
  const [postsList, setPostsList] = useState();
  const [storyList, setStoryList] = useState();

  useEffect(() => {
    postService({ setPost: (post) => setPostsList(post) });
    storiesServices({ setStory: (story) => setStoryList(story) });
  }, []);

  console.log(storyList);

  return (
    <div className="container-bacheca">
      <span>{storyList ? <Stories storyList={storyList} /> : <Placeholder />}</span>
       <span>
        {postsList ? <PostList postsList={postsList} /> : <Placeholder />}
      </span>
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
