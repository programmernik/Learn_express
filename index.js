import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRout from "./routs/userRouts.js";
const app = express();
dotenv.config();
app.use(cors(
  {
    origin:"http://127.0.0.1:5500",
    methods:["GET","POST","PUT","DELETE"]
  }
));
app.use(express.json());

const PORT = process.env.PORT || 5001;
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("mongodb connect successfull"))
  .catch((err) => console.log(`error-${err}`));

app.use("/api", userRout);
app.listen(PORT, () => {
  console.log(`server is running localhost ${PORT}`);
});
