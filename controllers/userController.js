const User = require("../Models/Users")
const mongoose= require("mongoose");
const bodyParser = require("body-parser");
const  express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

exports.view=(req, res)=>{
User.find((err,results)=>{
if(!err){
res.send(results)
console.log(results);
}
})
}
exports.create=(req, res)=>{
const users= User(req.body)
    users.save();
    res.send("created successfully");

}
exports.edit=(req, res)=>{

    User.updateOne({email:req.body.email},req.body,(err,docs)=>{
        if(!err){console.log(docs);
            res.send("updated successfully")
    
    }
        else{
            console.log(err);
        }
    })

}
exports.delete=(req, res)=>{
    User.deleteOne({email:req.body.email},(err,docs)=>{
        if(!err){res.send("deleted successfully")
            console.log(docs);
        }
        else{
            console.log(err);
        }
    })
   
}
