import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler'
import { generateToken } from '../config/generateToken';
import { User } from '../models/userModel';

export const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password, pic } = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields")
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists")
    }

    const user = await User.create({
        name, email, password, pic
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("Failed to Create the User");
    }
});

export const authUser = asyncHandler( async ( req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if ( user && ( await user.comparePasswords(password)) ) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password")
    }
});