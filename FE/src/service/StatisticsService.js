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
        return err;
      });
  }
}

const statService = new SignService();

export default statService;
