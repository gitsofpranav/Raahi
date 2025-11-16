import mongoose from "mongoose";


const connectToDb =async () =>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.DB_CONNECT}`)
       console.log(`\n MongoDB connected !!!  DB HOST ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("DB connection failed",error);
    }

}

export default connectToDb