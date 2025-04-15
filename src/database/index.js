import mongoose from "mongoose";
const connectToDB = async() => {
    const URL = "mongodb+srv://kumarsahuatishoff280301:PBTWNd7WFqyDkGTx@users.rc6xklq.mongodb.net/?retryWrites=true&w=majority&appName=users";
    mongoose.connect(URL)
        .then(() => console.log("Database Connected!"))
        .catch((e) => console.log(e));
}
export default connectToDB;