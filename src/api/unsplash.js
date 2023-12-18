import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Client-ID ${apiKey}`,
  },
});
