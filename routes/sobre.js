const express = require('express')
const { getAboutPage } = require('../controllers/PageController')

const router = express.Router()

router.get("/sobre", getAboutPage)

module.exports = router