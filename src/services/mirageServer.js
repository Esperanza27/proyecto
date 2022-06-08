import { createServer } from "miragejs";

// mocks
import storiesDetails from "../common/components/stories/services/mock/stories.mock";
import postDetails from "../common/components/bacheca/services/mock/postService.mock";

const mirageServer = ()=> {
    let server = createServer({
        routes() {
          this.get('/api/stories', () => storiesDetails);
          this.get('/api/posts', () => postDetails);
        },
      });
      return server;
    
}

export default mirageServer;