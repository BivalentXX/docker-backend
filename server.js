const PORT = 3000
const express = require("express")
const app = express()

const itemsRouter = require("./routes/items")
app.use(express.json())
app.use("/items", itemsRouter)
app.listen(PORT, () => console.log(`Server Started on http://localhost:${PORT}`))

