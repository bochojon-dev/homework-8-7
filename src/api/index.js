import axios from "axios";
const mainURL = axios.create({
  baseURL: "https://market.ilyosbekdev.uz",
});

// mainURL.interceptors.request.use((req) => {
//   const token = localStorage.getItem("x-auth-token");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   } else {
//     return req;
//   }
// });
export default mainURL;
