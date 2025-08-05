import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRout from "./routs/userRouts.js"
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000 || 5001;
 mongoose.connect(
    "mongodb+srv://kmnikita0000200:Nikita9569@cluster0.piztj59.mongodb.net/?"
  ).then(()=>console.log("mongodb connect successfull")).catch((err)=>console.log(`error-${err}`))

 
app.use('/api',userRout)
app.listen(PORT, () => {
  console.log(`server is running localhost ${PORT}`);
});
