import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {

    mongoose.set('strictQuery', true)
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
    }
    catch (err) {
        console.log(err);
    }
}
