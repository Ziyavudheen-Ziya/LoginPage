const router = require('express').Router()

//UserController require
const userController = require('../controller/userController.js')

router.get('/',userController.login)
router.post('/post',userController.home)
router.post('/logout',userController.logout)


module.exports = router