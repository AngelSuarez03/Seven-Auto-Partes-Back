import express from "express"
import usuarioRouter from "./routes/usuario.router"
import productoRouter from "./routes/producto.router"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))

const PORT = process.env.PORT || 3001

app.use('/api/usuario', usuarioRouter)
app.use('/api/producto', productoRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})