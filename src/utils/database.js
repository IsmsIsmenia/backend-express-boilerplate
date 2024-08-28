import mongoose from "mongoose";

const URI = 'mongodb+srv://admin:dinamarca12.@cluster0.l2cu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const databaseConnection = async () =>{
    if (!global.mongoose){
        mongoose.set('strictQuery', false)
    global.mongoose = await mongoose.connect(URI)
    }
}
export default databaseConnection