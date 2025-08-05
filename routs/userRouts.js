import express from "express"
import {registered , getuser ,updateUser, deleteUser, findoneUser, findemail} from "../controllers/userController.js"
const rout= express.Router()
rout.post('/registered',registered);
rout.get('/',getuser );
rout.put('/update/:id',updateUser);
rout.delete('/delete/:id', deleteUser);
rout.get('/findone/:id',findoneUser);
rout.get('/findone', findemail);
export default rout
