// middlewares/verifyToken.js
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../keys.js" 

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization // "Bearer token"
  if (!authHeader) {
    return res.status(401).json({ message: "Token no enviado" })
  }

  const token = authHeader.split(" ")[1]
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido" })
    }

    req.user = user 
    next() 
  })
}

export default verifyToken
