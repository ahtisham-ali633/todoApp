import express from 'express';
const userRouter = express.Router();
import AuthController from '../Controller/authController';

userRouter.post('/signin', AuthController.signin);

userRouter.post('/signup', AuthController.signup);


export default userRouter;