import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID i7r0YIxDSg4La753FQFzfbhgCj0hMgGvo9H78den9MY",
  },
});
