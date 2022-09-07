import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3200/",
});

class SignService {
  registerNewUser(data) {
    return api.post("/registration", data);
  }

  loginUser(data) {
    return api.post("/login", data);
  }
}

const service = new SignService();

export default service;
