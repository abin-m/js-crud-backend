import express from "express";
import { fetch,create,update,deleteUser} from "../controller/userController.js";

const route =express.Router()



route.post("/user/create",create)

route.get("/user/getallusers",fetch)

route.put('/user/update/:id',update)

route.delete('/user/delete/:id',deleteUser)

export default route;