const express = require("express");
const router = express.Router();
// const User = require("../Models/Users")


const userController=require("../controllers/userController");


router.get("/users",userController.view);
router.post("/users",userController.create);
router.post("/users/update",userController.edit);
router.post("/users/delete",userController.delete);


module.exports=router;