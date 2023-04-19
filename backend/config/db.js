
const mongoose = require("mongoose");

async function database(){
    try {
        console.log("Database connected")
        await mongoose.connect(process.env.MONGO_URL);

    } catch (error) {
        console.log(error);
    }
}


module.exports = database;