const express = require('express')

const postController = require('../controllers/loginController')

const router = express.Router()


router.post('/login', postController.login)


module.exports = router