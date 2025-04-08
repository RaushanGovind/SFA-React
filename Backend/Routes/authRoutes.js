const Router = require('express')
const {login,register} = require('../Controller/authController')
const routes = Router();

routes.post('/login',login)
routes.post('/register',register)

moudle.exports = routes