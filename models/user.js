import mongoose from "mongoose"
const userSchme= new mongoose.Schema({
    name: {type : String, required :true},
    email: { type : String, required :true , unique: true},
    password : { type : Number, required: true}

})

const userModel=mongoose.model("User",userSchme)
export default userModel