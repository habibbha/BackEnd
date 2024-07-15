const jwt = require("jsonwebtoken");

const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) res.status(401).json({ msg: "your are not authorized !" });
    else {
      const verifytoken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (!verifytoken)
        res.status(401).json({ msg: "your are not authorized as a token!" });
      else {
        if (verifytoken.role == "admin") {
          // role admin
          next();
        } else {
          res.status(400).json({ msg: "you are not authorized as this role" });
        }
      }
    }
  } catch (err) {
    res.status(400).json({ msg: "something went wrong !", err: err.message });
  }
};

module.exports = adminMiddleware;
