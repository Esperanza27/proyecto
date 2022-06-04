import Head from "./componets/head/Head";
import Body from "./componets/body/Body";
import Footer from "./componets/footer/Footer";
import "./Post.scss";

const Post = ({ post }) => {
  const { head = {}, body = {}, footer = {} } = post;
  return (
    <div className="post-container">
      <Head details={head} />
      <Body details={body} />
      <Footer details={footer} />
    </div>
  );
};
export default Post;