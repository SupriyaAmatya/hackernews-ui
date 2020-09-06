import Axios from 'axios';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export default Axios.create({
  baseURL: BASE_URL,
  responseType: "json"
});

