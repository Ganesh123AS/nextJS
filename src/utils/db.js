import mongoose from "mongoose";

const connect = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/next");
    } catch (err) {
        throw new Error("Error connecting to MongoDB");
    }
}

export default connect;