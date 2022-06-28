import Head from "./componets/head/Head";
import Body from "./componets/body/Body";
import Footer from "./componets/footer/Footer";
import "./Post.scss";

const Post = ({ post,updateIlike }) => {
  const { head = {}, body = {}, footer = {} } = post;
  return (
    <div className="post-container">
      <Head details={head} />
      <Body details={body} />
      <Footer details={footer} updateIlike={updateIlike}/>
    </div>
  );
};
export default Post;