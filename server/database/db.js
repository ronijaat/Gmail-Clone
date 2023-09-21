import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = async()=>{
    const url = process.env.DB;
    try{
        await mongoose.connect(url);
        console.log("mongo is connected");
    }catch(error){
        console.log("error in connecting db",error);
    }
}

export default Connection;