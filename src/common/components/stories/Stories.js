import "./Stories.scss";
import PostStory from "./components/postStory/PostStory";

const Stories = ({ storyList = [] }) => {
  return (
    <div className="stories-container">
      <div className="stories">
        {storyList.map((story, i) => {
          return (
            <div key={i}>
              <PostStory story={story} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Stories;
