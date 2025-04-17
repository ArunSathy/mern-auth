import mongoose from "mongoose";

const connectDB = async () => {

    // Just to get a terminal message when connecting
    mongoose.connection.on('connected', () => console.log("Database Connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`)
}

export default connectDB;