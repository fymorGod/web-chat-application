import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcrypt';

export interface IUser extends Document {
    email: String;
    name: String;
    password: string;
    pic: String;
    comparePasswords(candidatePassword: string ): boolean;
}
const salt: number = 10; //encrypt

const userSchema:Schema<IUser> = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 32,
        },
        password: {
            type: String,
            required: true,
        },
        pic: {
            type: String,
            default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre('save', async function (this: IUser, next: (err?: Error | undefined) => void) {
    if (!this.isModified('password')) {
      return next();
    }
    this.password = await bcrypt.hash(this.password, salt);
  });

userSchema.methods.comparePasswords = function (
    candidatePassword: string
  ) {
   return bcrypt.compare(candidatePassword, this.password);
  };

export const User = mongoose.model("User", userSchema);