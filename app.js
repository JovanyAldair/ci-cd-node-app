const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 3000

app.use(cors())

app.get("/", (req, res)=>{
    res.json({message: 'REQUEST SUCCESSFUL!'})
})

app.get("/download", (req, res)=>{
    var path = require("path")
    var file = path.join(__dirname, "./file.pdf")

    res.download(file, (err)=>{
        if(err){
            console.log("ERROR")
            console.log(err)
        } else{
            console.log("SUCCESS")
        }
    })
})
module.exports = app
