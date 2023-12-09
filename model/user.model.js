const mongoose=require('mongoose');
//import database connectivity file
const db =require('../config/db');

const bcrypt= require("bcrypt");

const{Schema}=mongoose;


const userSchema =new Schema({
    email:{
        type:String,
        lowercase:true,
        require:true,
        unique:true

    },
    password:{
        type:String,
        require:true

    }
});


userSchema.pre('save',async function(){
    try{

        var user = this; // reffer this schema
        const salt=await(bcrypt.genSalt(10));//can use any parameter instead of 10
        const hashpass= await bcrypt.hash(user.password,salt);

        user.password=hashpass;

    } catch(err){
        throw(err);

    }
})

//to encript the password


const UserModel=db.model('user',userSchema);

module.exports=UserModel;