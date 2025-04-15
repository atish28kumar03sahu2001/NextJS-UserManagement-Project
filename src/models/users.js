import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    address: String,
    phone: String,
    position: String,
})
const users = mongoose.models.users || mongoose.model('users', UserSchema);
export default users;