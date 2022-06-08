import axios from "axios";

const postService = async ({ setPost }) => {
  try {
    const { data = {} } = await axios.get(
      "/api/posts"
    );
    console.log(data)
    return setPost(data);
  } catch (err) {
    console.log(err);
  }
};

export default postService;
