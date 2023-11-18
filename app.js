const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 3000
var path = require("path")

app.use(cors())

app.get("/", (req, res)=>{
    res.json({message: 'REQUEST SUCCESSFUL!'})
})

/*
 this route will be download a file on rootDir
*/
app.get("/download", (req, res)=>{
    var file = path.join(__dirname, "./file.pdf")

    /*
        it will be return a message of error if not download the file 
        or a success message if download the file.
    */ 
    res.download(file, (err)=>{ 
        if(err){
            console.log("ERROR")
            console.log(err)
        } else{
            console.log("SUCCESS")
        }
    })
})
module.exports = app // export express app for the tests
