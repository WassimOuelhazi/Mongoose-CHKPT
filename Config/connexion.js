//import mongoose
const mongoose = require("mongoose");
// connect to database mongodb atlas


const conndb = async () => {
    try {
        await mongoose.connect("mongodb+srv://wassim:<password>@contact.8ar0ufv.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database successfully connected !");
    } catch (error) {
        console.log(error);

    }
};

module.exports = conndb
