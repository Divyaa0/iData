import user from "./Schema.js";
export const AddUser = (req,res)=>
{
    const user_data=req.body;
    console.log(user_data)

    const validData=new user(user_data);
    try{
        validData.save();
        res.status(201).json(validData);
    }
    catch(error)
    {
        res.status(409).json({message:error.message })
    }
}


export const GetAllUser =async(req , res)=>
{
    // find function --will fetch data from one document 
    try{
        console.log("fetchdata")
        const fetch_data =await user.find({})
        console.log(fetch_data)
        res.status(200).json(fetch_data)
        
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}
export const LoadPrevData = async (req ,res)=>
{
    try{
        console.log("finding data to update : " , req.params.id);
        const ID_data= await user.findById(req.params.id);
        res.status(200).json(ID_data)
    }
    catch(error)
    {
        res.status(404).json({message:error.message})
    }
}
export const UpdateUserData = async(req,res) =>
{
    const user_data=req.body;
    const validData=new user(user_data);
    console.log("hello updation")

    try {
        const updatedUser = await user.findOneAndUpdate(
            { _id: req.params.id },
            user_data,
            { new: true } // This option returns the updated document
          );
      
    }
    catch(error)
    {
        res.status(409).json({message:error.message})
    }
}
export const ReadUserData = async(req,res)=>
{
    try{
        console.log("got data : " , req.params.id);
        const got_data= await user.findById(req.params.id);
        res.status(200).json(got_data)
    }
    catch(error)
    {
        res.status(404).json({message:error.message})
    }
}
export const DeleteUserData = async(req,res)=>
{
    try 
    {
        await user.deleteOne({_id : req.params.id})
    }
    catch(error)
    {

    }
}
