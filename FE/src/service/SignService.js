import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3200/",
});

axios.interceptors.response.use(
  function (response) {
    if (response.status === 404) {
      return response.status(404).json({ response });
    }
    return response;
  },
  function (error) {
    return new Error(error);
  }
);

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
        return err;
      });
  }

  loginUser(data) {
    return api
      .post("/login", data)
      .then((res) => {
        if (res.status === 201) {
          res.headers.authorization = `Bearer ${res.data.token}`;
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("solvveUsername", res.data.name);
          return res;
        }
      })
      .catch((err) => console.log(err));
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
      const headers = { name: localStorage.getItem("solvveUsername") };
      return api
          .post("/updateStat", data, { headers: headers })
  }
}

const service = new SignService();

export default service;
