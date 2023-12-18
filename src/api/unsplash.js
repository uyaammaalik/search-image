import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Client-ID ${apiKey}`,
  },
});

// export default axios.create({
//   baseURL: "https://api.unsplash.com",
//   headers: {
//     Authorization: "Client-ID i7r0YIxDSg4La753FQFzfbhgCj0hMgGvo9H78den9MY",
//   },
// });
