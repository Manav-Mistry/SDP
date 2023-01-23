const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000
const cors = require("cors")
const {errorHandler} = require("./middleware/errorHandler")
// const morgan = require('morgan');
const connectDB = require("./config/db")


// connect to the database
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.use("/api/users", require("./routes/userRoutes"))
app.use("/api", require("./routes/userRoutes"))

app.use(errorHandler)
app.listen(PORT, () => "server started...")