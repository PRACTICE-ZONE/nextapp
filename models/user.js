import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: [true, 'Username already exists. Please try another one.'],
    },

    email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists. Please try another one.'],
    },

    password: {
        type: String,
        required: true,
        trim: true
    },
}
);
