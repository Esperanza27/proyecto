import Head from "./componets/head/Head";
import Body from "./componets/body/Body";
import Footer from "./componets/footer/Footer";
import "./Post.scss";

const Post = () => {
  return (
    <div className="post-container">
      <Head />
      <Body />
      <Footer />
    </div>
  );
};
export default Post;
