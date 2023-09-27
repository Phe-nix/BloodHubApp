import * as jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
      return res.status(401).send("Access denied. No token provided.");

    if (token) {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      
    if (decoded.role == "admin") {
        next();
      } else {
        res.status(403).send("Access denied. No permission.");
      }
    }
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

export default authenticateToken;
