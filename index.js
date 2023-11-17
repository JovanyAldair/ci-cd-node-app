const express = require("express")
const app = express()
const home = require("./routes/home")
const sobre = require("./routes/sobre")
const comunidade = require('./routes/comunidade')
const rootDir = require('./utils/path')
const path = require("path")
const { hostname } = require("os")
const PORT = 8081
const bodyParser = require('body-parser')


app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static(path.join(rootDir, 'public')))

//The routes

app.use(home)
app.use(sobre)
app.use(comunidade)

app.listen(PORT, hostname,  ()=>{{
    console.log(`SERVER IS UP on port ${PORT}` )
}})