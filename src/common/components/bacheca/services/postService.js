import axios from "axios";
import { createServer } from "miragejs";

// mocks
import postDetails from "./mock/postService.mock";

createServer({
    routes() {
      this.get("/api/posts", () => postDetails)
    },
  })

const postService = async ({ setPost }) => {
  try {
    const { data = {} } = await axios.get(
      "/api/posts"
    );
    return setPost(data);
  } catch (err) {
    console.log(err);
  }
};

export default postService;
