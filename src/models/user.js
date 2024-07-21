import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: [true, "Email Required !!"]
    },
    password: {
        type: String, 
        required: [true, "Password Required !!"]
    },
    about: String,
    profileURL: String,
    // address: {
    //     street: String, 
    //     city: String,
    //     country: String,
    //     pinCode: Number
    // }
})      

export const User = mongoose.models.Users || mongoose.model('Users', UserSchema); 
// name of the database in the collection will be Users