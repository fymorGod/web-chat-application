import "reflect-metadata";
import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { router } from "./routes/userRoutes";
import cors from 'cors';
import { connectDB } from "./config/db";
import { errorHandler, notFound } from "./middlewares/errorMiddleware";

dotenv.config()

connectDB();
const app = express();
app.use(cors())
app.use(express.json() // to accept JSON
)
app.get('/', (req:Request, res: Response) => {
    res.send("Api is running")
})

app.use('/api/user', router)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));