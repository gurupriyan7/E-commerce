import express from 'express';
import { userController } from '../modules/user/user.controller';


const router = express.Router()
const {createUser,userLogin}=userController

router.post("/",createUser)
router.post("/login",userLogin)

export default router;