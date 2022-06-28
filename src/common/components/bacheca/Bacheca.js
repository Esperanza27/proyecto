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

  const updateIlike = (id) => {
    console.log(id);
    const newIlike = postsList.map((post) => {
      if (post.footer.id === id) {
        return {
          ...post,
          footer: {...post.footer,status: !post.footer.status,
            numberLike: !post.footer.status ? post.footer.numberLike + 1 : post.footer.numberLike - 1,}
          
        };
      } else {
        return post;
      }
    });
    setPostsList(newIlike);

    // --> servizio newIlike
  };
  console.log(storyList);

  return (
    <div className="container-bacheca">
      <span>{storyList ? <Stories storyList={storyList} /> : <Placeholder />}</span>
       <span>
        {postsList ? <PostList postsList={postsList} updateIlike={updateIlike}/> : <Placeholder />}
      </span>
    </div>
  );
};
export default Bacheca;

const Placeholder = () => {
  return <h1>Loading...</h1>;
};

const PostList = ({ postsList = [], updateIlike}) => {
  return (
    <>
      {postsList.map((post, i) => {
        return (
          <div key={i}>
            <Post post={post} updateIlike={updateIlike}/>
          </div>
        );
      })}
    </>
  );
};
