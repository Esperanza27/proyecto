import "./Stories.scss";

const Stories = ({ storyList = [] }) => {
  return (
    <>
      {storyList.map((story, i) => {
        return (
          <div key={i}>
            <PostStory story={story} />
          </div>
        );
      })}
    </>
  );
};
export default Stories;

const PostStory = ({ story }) => {
  console.log("story", story);
  return <div>post story</div>;
};
