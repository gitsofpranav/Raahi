import express from 'express'
import userController from '../controllers/user.controller'
import { ExpressValidator } from 'express-validator';
const router = express.Router();


router.post('/register', [
    ExpressValidator('email').isEmail().withMessage('Invalid Email'),
    ExpressValidator('fullname.firstname').isLength({ min:3}).withMessage('First name must be at least 3 character long'),
    ExpressValidator('password').isLength({ min:6}).withMessage('Password must be at least 6 character long'),
],
userController.registerUser)

export default router
