import mongoose from "mongoose"

const connectDb = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://notebees:notebees@cluster0.vpffoxp.mongodb.net/`);
        console.log('MongoDB Connected Successfully!')
    } catch (error) {
        console.log('Error In DB Connection!',error)
    }
}

export default connectDb



