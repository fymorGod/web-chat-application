import "reflect-metadata";
import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { chats } from "./data/data";
import cors from 'cors';

const app = express();
app.use(cors())

dotenv.config();

app.get('/', (req:Request, res: Response) => {
    res.send("Api is running")
})

app.get('/api/chat', (req:Request, res: Response) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req:Request, res: Response) => {
    const singleChat = chats.find((c:any) => c._id === req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`)
});