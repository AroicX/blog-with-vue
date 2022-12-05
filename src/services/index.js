import axios from "axios";

const requests = axios.create({
  baseURL: "https://techcrunch.com/wp-json/wp/v2",
});

export default requests;
