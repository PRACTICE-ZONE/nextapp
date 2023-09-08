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
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },
}
);
