import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import jwt from "jsonwebtoken"

import userRoutes from "./routes/user.routes.js"
import verifyToken from "./middlewares/verifyToken.js"
import { PORT, JWT_SECRET } from "./keys.js"

const app = express()

// Middlewares globales
app.use(cors())
app.use(express.json());

// Ruta pública
app.get("/", (req, res) => {
  res.send("API de usuarios")
})

// Ruta de login (modo demo, acepta todo)
app.post("/signin", async (req, res) => {
  const { email, password } = req.body

  try {
    const user = {
      id: 1,
      name: "Demo User",
      email,
    }

    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' })

    res.status(200).json({ token })
  } catch (err) {
    res.status(500).json({ message: "Error en server", error: err.message })
  }
})

// Ruta protegida de prueba
app.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "Se accedio a ruta protegida",
    user: req.user,
  })
})


// Rutas de usuarios
app.use("/", userRoutes)




app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
)
