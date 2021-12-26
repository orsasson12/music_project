const express = require('express')

const postController = require('../controllers/registerController')

const router = express.Router()


router.post("/register", postController.register)


module.exports = router