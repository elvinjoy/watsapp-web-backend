import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ 
    iss: {
        type: String,
    },
    nbf: {
        type: Number,
    },
    aud: {
        type: String,
    },
    sub: {
        type: String,
        required: true,  // Required field
    },
    email: {
        type: String,
    },
    email_verified: {
        type: Boolean,  
    },
    azp: {
        type: String,
    },
    name: {
        type: String,
        required: true,  // Required field
    },
    picture: {
        type: String,
        required: true,  // Required field
    },
    given_name: {
        type: String,
    },
    family_name: {
        type: String,
    },
    iat: {
        type: Number,
    },
    exp: {
        type: Number,
    },
    jti: {     
        type: String,
    },
});

const User = mongoose.model("User", userSchema);

export default User;
