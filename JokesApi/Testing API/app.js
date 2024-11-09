import express from "express"
import morgan from "morgan"
import logRequest from "./middleware/logger.js"
import dotenv from "dotenv"
import cors from "cors"

// import authUser from './middleware/auth.js'
import mongoose from "mongoose"

// Routes Import
import jokesRoutes from "./routes/jokesRoute.js"
import usersRoutes from "./routes/usersRouts.js"

const app = express()
const PORT = 3000
dotenv.config()


// DB Connection
const URI = process.env.DB_URI
console.log(URI);


mongoose.connect(process.env.URI).then(() => {
    console.log("Successfully Conected to MongoDb Server");
})

// Middleware
app.use(express.json())
app.use(morgan("tiny"))
app.use(logRequest)
app.use(cors())

app.use('/api/jokes', jokesRoutes)
app.use('/api/Users', usersRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})