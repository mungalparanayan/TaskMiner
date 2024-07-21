import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbname: "work_manager",
        })

        // const userdata = new User({
        //     name: "test name",
        //     email: "test@gmail.com",
        //     password: "testpassword",
        //     about: "testing",
        //     profileURL: "test profile"
        // })
        // await userdata.save();

        // console.log(userdata);
        // console.log("User is created");

        console.log("Connect to Mongodb successfully...");
        // console.log(connection);
        console.log("connected with host", connection.host)
    }
    catch(error) {
        console.log("Failed to connect to database...");
        console.log(error);
    }
}