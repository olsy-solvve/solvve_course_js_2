import jwt from "jsonwebtoken";
import tokenConfig from "../tokenConfig.js";

export default function (req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({ message: "You are not logged in" });
  }

  const decodedToken = jwt.decode(token, { complete: true });
  if (!decodedToken) {
    return res.status(403).json({ message: "Token decode failed" });
  }

  const decodedData = jwt.verify(token, tokenConfig, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "token is invalid" });
    }
    req.payload = payload
    next();
  });
}
