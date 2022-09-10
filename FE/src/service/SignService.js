import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3200/",
});

class SignService {
  registerNewUser(data) {
    return api
      .post("/registration", data)
      .then((res) => {
        if (res.status === 201) {
          return res;
        }
      })
      .catch((err) => {
        return new Error(err.response.data.message);
      });
  }

  loginUser(data) {
    return api
      .post("/login", data)
      .then((res) => {
        if (res.status === 201) {
          res.headers.authorization = `Bearer ${res.data.token}`;
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("solvveusername", res.data.name);
          return res;
        }
      })
      .catch((err) => {
        return new Error(err.response.data.message);
      });
  }

  getUserInfo(data) {
    const headers = { token: localStorage.getItem("token") };
    return api
      .post("/userInfo", data, { headers: headers })
      .then((res) => {
        if (res.status === 201) {
          return res;
        }
      })
      .catch((err) => {
        return new Error(err.response.data.message);
      });
  }

  updateStat(data) {
    const headers = { name: localStorage.getItem("solvveusername") };
    return api.post("/updateStat", data, { headers: headers });
  }
}

const service = new SignService();

export default service;
