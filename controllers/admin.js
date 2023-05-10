const COURSE = require("../models/courseModel");
const USER = require("../models/userModel");

const makeUserAdmin=async(req,res)=>{
    try {
        const user = await USER.findById(req.params.userId);
        if(!user){
            return res.status(404).json({ success : false , message:"User not found"});
        }
        if(user.role === "admin"){
            user.role = "user";
            await user.save();
            return res.status(200).json({  success : true , message:`${user.username} is now an admin`});
        }else{
            user.role = "admin";
            await user.save();
            return res.status(200).json({ success : true , message:`${user.username} is now a user`});
        }
        
    } catch (error) {
        res.status(404).json({
            success : false,
            message: "Making user or admin failed"
        })
    }
}


const getAllUsers = async(req,res)=>{
    try {
        let limit, page;

        if(!req.query.limit)limit = 10;
        if(!req.query.page) page = 1;
        let skip = (page-1)*limit ;
        const users = await USER.find().skip(skip).limit(limit).populate('courseEnrolled');
        return res.status(200).json({
            success : true,
            users
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            message: "Getting all users failed"
        })
    }
}



module.exports = {
    makeUserAdmin,
    getAllUsers 

}