import User from "../model/userModel.js"

// CREATE USERS 

export const create= async(req,res)=>{
    try {
        const userData= new User(req.body);
        const {email}=userData;
        const userExist= await User.findOne({email:email});
        if(userExist){
            return res.status(400).json({error:"User exists already"})
        }
        const savedUser= await userData.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json({error:"Internal Server error"})
        console.log(error)
    }
}


// FETCH USERS

export const fetch = async(req,res)=>{
    try {
        const users = await User.find();
        if(users.length==0){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error:"Internal Server error"})
    }
}

// UPDATE USER

export const update=async(req,res)=>{
    try {
        
        const id= req.params.id;
        const userExist= await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({
                message:"User Not Found"
            })
        }
        const updateUser= await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(201).json(updateUser)
    } catch (error) {
        res.status(500).json({error:"Internal Server error"})
    }
}

// DELETE USER

export const deleteUser = async(req,res)=>{
    try {
        const id= req.params.id;
        const userExist= await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({
                message:"User Not Found"
            })
        }
        await User.findByIdAndDelete(id)
        res.status(204).json({message:"No content"})
    } catch (error) {
        res.status(500).json({error:"Internal Server error"})
    }
}