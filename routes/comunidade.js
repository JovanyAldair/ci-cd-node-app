const express = require("express")
const { getCommunityPage } = require("../controllers/PageController")
const router = express.Router()

router.get("/comunidade", getCommunityPage)

module.exports= router