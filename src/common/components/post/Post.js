import { useState } from "react";
import Head from "./componets/head/Head";
import Body from "./componets/body/Body";
import Footer from "./componets/footer/Footer";
import BachecaComments from "./componets/footer/components/bachecaComments";

// style
import "./Post.scss";

const Post = ({ post, updateIlike }) => {
  const [showComments, setShowComments] = useState(false);

  const doComent = ()=>{
    setShowComments(!showComments);
    
  };
  const { head = {}, body = {}, footer = {} } = post;
  return (
    <div className="post-container">
      <Head details={head} />
      <Body details={body} />
      <Footer details={footer} updateIlike={updateIlike} doComent={doComent}/>
      {showComments && <BachecaComments commentsList={footer?.commentsList} /> }
    </div>
  );
};
export default Post;