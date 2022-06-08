import axios from "axios";

const storiesServices = async ({ setStory }) => {
  try {
    const { data = {} } = await axios.get(
      "/api/stories"
    );
    return setStory(data);
  } catch (err) {
    console.log(err);
  }
};

export default storiesServices;