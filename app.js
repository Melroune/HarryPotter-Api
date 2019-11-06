const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const routes = require("./routes/index")
const app = express()
const PORT = process.env.PORT || 4242

app.use(cors("*"))
app.use(morgan("dev"))
app.use(morgan(":method :url :status :res[content-length] - :response-time "))

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

<<<<<<< HEAD
app.use("/spell", routes.spell)
app.use("/af", routes.af)
=======
app.use("/houses", routes.houses)
>>>>>>> 864dafb6e83001854f21cd4eee223f0f63df00cc
app.use("/characters", routes.characters)
app.use("/spell", routes.spell)

app.get("/", (req, res) => {
  res.status(200).send("je suis dans /")
})
// if(process.env.NODE_ENV === "production"){

// }

app.listen(PORT, console.log(`http://localhost:${PORT}`))
