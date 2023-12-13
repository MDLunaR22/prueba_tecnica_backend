const mongoose = require("mongoose")

const mongoConnection = async () => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(process.env.CNN_MONGO);
        console.log("DB correct connection");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    mongoConnection
}