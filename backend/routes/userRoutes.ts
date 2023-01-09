import express from 'express';
import { authUser, registerUser } from '../controllers/userControllers';

export const router = express.Router();

router.route('/').post(registerUser)
router.post('/login', authUser)