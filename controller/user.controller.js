const UserService =require("../services/user.services");


//Handle the request and response from frontend
exports.register =async (req,res,next)=>{
    try{

        const {email,password}=req.body;

        const successRes= await UserService.registerUser(email,password);

        res.json({status:true,success:"User Registration Successfully"}); // respose back to frontend

    }catch(error){
        throw error

    }
}

