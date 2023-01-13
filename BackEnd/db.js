const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://pratiktomar:Pratik00t@cluster0.ziby8b4.mongodb.net/?retryWrites=true&w=majority"
// const mongoURI = "mongodb://localhost:27017/";
mongoose.set('strictQuery', false);
const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("conneted to mongoose");
    })
}

module.exports = connectToMongo;