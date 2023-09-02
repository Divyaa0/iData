import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment";

const userSchema= new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    position: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true }
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'crud-data')

const user = new mongoose.model('crud-data',userSchema);
export default user;