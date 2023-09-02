import mongoose from "mongoose";

const DB = async()=>
{
    const url=`mongodb://127.0.0.1:27017/crud `;

    try{
        await mongoose.connect(url)
        console.log('Database connected Successfully !')
    }
    catch(error)
    {
        console.log(" error present in databse connection " , error)
    }
}

export default DB;