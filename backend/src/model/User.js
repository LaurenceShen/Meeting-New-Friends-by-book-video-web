import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const UserSchema = new Schema({
 name: String,
 email: String,
});
const User = mongoose.model('User', UserSchema);
export default User; 
