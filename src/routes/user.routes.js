import express from 'express';

import { verifyUser, createUser } from '../controllers/user/signup.controller';
import login from '../controllers/user/login.controller';
import logout from '../controllers/user/logout.controller';
import {
  forgotPassword,
  getResetPassword,
  resetPassword,
} from '../controllers/user/forgotPassword.controller';
import findAllUsers from '../controllers/user/findAllUsers.controller';
import updateProfile from '../controllers/user/profile.controller';

const userRouter = express.Router();

// Create a new Tutorial
userRouter.post('/signup', verifyUser);
userRouter.get('/signup/:token', createUser);
userRouter.post('/login', login);
userRouter.post('/logout', logout);

userRouter.patch('/forgot-password', forgotPassword);
userRouter.get('/reset-password/:id/:token', getResetPassword);
userRouter.post('/reset-password/:id/:token', resetPassword);
userRouter.put('/:uuid', updateProfile);
userRouter.get('/profile/users', findAllUsers);

export default userRouter;
