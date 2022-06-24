import "./PostStory.scss";

const PostStory = ({ story }) => {

  return (
    <div className="post-story" style={{ backgroundImage:`url(${story?.img})` }}>
      <img className="post-story-logo" src={story?.logo} alt="hello"></img>
      <div className="post-story-desc">
        {story?.description}
      </div>
    </div>
  );
};

export default PostStory;
