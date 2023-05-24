const express = require("express");
const userRouter = express.Router()
const {UserModel} = require('../model/userModel')
const jwt =require("jsonwebtoken");
const bcrypt = require('bcrypt')
userRouter.get("/",(req,res)=>{
    res.send("welcome to page")
})

userRouter.post("/register",async(req,res)=>{
    const {name,email,pass,age} = req.body
    try{
        bcrypt.hash(pass, 2, async(err, hash) => {   // hashing the password
            if(err){
                res.send('something went wrong while hashing password')
            }else{
                const user = new UserModel({name,email,pass:hash,age});
                 await user.save()
                 res.send("registered successfully")
            }
        })
    }catch(e){
        res.send(e.message)
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,pass} = req.body;;
    try{
        const user = await UserModel.find({email});
        const token = jwt.sign({userId:user[0]._id},"masai");// generate a random token
        if(user.length){
            bcrypt.compare(pass, user[0].pass, function(err, result) {  // decoding password from hashed one
                if(result){
                    res.send({"msg":"logged in",token})
                }else{
                    res.send("password mismatched")
                }
            })
        }else{
            res.send('user not found')
        }
    }catch(e){
        res.send(e.message)
    }
})
module.exports={
    userRouter
}