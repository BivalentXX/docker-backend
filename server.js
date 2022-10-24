const express = require("express")
const itemsRouter = require("./routes/items")
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use("/items", itemsRouter)
app.listen(PORT, HOST, () => console.log(`Server Started on http://${HOST}:${PORT}`))