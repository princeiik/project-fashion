const mongoose = require('mongoose')

//Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@princecluster.olnk3yw.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`)
        console.log(`MongoDB Connect: ${conn.connection.host}`);
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB