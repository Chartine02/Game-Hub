import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1e4c61ec090845918cdc69262788940d",
  },
});
