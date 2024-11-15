import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log('Database connected')
    } catch (error) {
            console.log("Failed to connect")
            console.log(error)
    }
    }

export default connectDB