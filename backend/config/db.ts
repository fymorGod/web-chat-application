import mongoose, { ConnectOptions } from "mongoose";
import 'dotenv/config';

type ConnectionOptionsExtend = {
    useNewUrlParser: boolean
    useUnifiedTopology: boolean
}
const options: ConnectOptions & ConnectionOptionsExtend = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.set('strictQuery', false);
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, options);
        console.log(`MONGO DB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error}`)
        process.exit();
    }
}