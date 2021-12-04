import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export async function createUser({ name, email, password }) {
  const user = { name, email, password };
  const data = axios.post("/users/signup", user);
  return data;
}

export async function loginUser({ email, password }) {
  const user = { email, password };
  const data = axios.post("/users/login", user);
  return data;
}
export async function currentUser() {
  const data = axios.get("/users/current");
  return data;
}
