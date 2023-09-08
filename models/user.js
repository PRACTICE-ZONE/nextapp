import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required.'],
        unique: [true, 'Username already exists. Please try another one.'],
        match: [/^[a-zA-Z0-9]+$/, 'Username is invalid. Please try another one.'],
    },

    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: [true, 'Email already exists. Please try another one.'],
        match: [/^[a-zA-Z0-9]+$/, 'Email is invalid. Please try another one.'],
    },

    image: {
        type: String,
    },
}
);

export default models.User || model('User', userSchema);
