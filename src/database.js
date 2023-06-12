import mongoose from "mongoose";
import {MONGODB_URI} from './config' 


(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI)
    //const db = await mongoose.connect("mongodb://127.0.0.1:27017/crud-mongo");
    //en versiones de node mayor a 17, se conecta de esta forma a mogodb
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(console.log('el error es este:', error));
  }
})()

