const mongoose= require("mongoose");

const mongooseURI="mongodb://localhost:27017/usersDB";


const connectToMongoose=()=>{
    mongoose.connect(mongooseURI,()=>{
        console.log("Connected to Mongoose successfully");
    })
}

module.exports=connectToMongoose;