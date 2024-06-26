import mongoose from 'mongoose'


let isConnected = false;
export const connectToDB = async()=>{
    mongoose.set('strictQuery',true);
    if(isConnected){
        console.log("DB already connected ");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"elicit_ai",
            useNewUrlParser:true,
            useUnifiedTopology:true
        }

        )
        isConnected= true;
        console.log("DB connected");
    } catch (error) {
        console.log(error);
        
    }
}