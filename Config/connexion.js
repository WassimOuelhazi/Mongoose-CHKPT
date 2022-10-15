//import mongoose
const mongoose = require("mongoose");
// connect to database mongodb atlas


const conndb = async () => {
    try {
        await mongoose.connect("mongodb+srv://wassim:123+456+@contact.8ar0ufv.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database successfully connected !");
    } catch (error) {
        console.log(error);

    }
};

module.exports = conndb
