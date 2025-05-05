const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('../Models/user')
const signup = async (req,res)=>{

    try{   
        const {name,email,password} = req.body;
        const user = await UserModel.findOne({email})
        if(user){
            return res.status(409).json({message:"User is Already exist, You can login", success:false })
        }
        const userModel = new UserModel({name,email,password}) 
        //hash the password 
        userModel.password = await bcrypt.hash(password,10)
        await userModel.save()
        return res.status(201).json({message:"User Created Successfully", success:true })
    }catch(error){
        console.log(error)
       res.status(500).send(error)
    }
}

const login = async (req,res)=>{

    try{   
        const {email,password} = req.body;
        const user = await UserModel.findOne({email})
        const errorMsg = 'Auth failed email or password wrong'
        if(!user){
            return res.status(403).json({message:errorMsg,success: false})
        }
         
        //check here password is equal or not 
        const isPassEqual = await bcrypt.compare(password,user.password)
        if(!isPassEqual){
            return res.status(403).json({message:errorMsg, success:false})
        }
        //jwt token
        const jwtToken = jwt.sign({email: user.email,_id: user._id},"tanukumar",{expiresIn:"24h"})
        res.status(200).json({message:'login Successfully' ,success:true , jwtToken,email,name:user.name})
    }
    catch(error){
       console.log(error)
       
    }
}


module.exports ={
    signup,
    login
}