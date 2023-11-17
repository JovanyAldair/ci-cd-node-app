const express = require("express")
const { getHomePage } = require("../controllers/PageController")
const router = express.Router()

router.get("/", getHomePage)

module.exports= router