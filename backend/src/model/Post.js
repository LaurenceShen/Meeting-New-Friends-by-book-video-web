import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const PostSchema = new Schema({
 id: Number, // Number is shorthand for {type: Number}
 title: String,
 content: String,
});
const Post = mongoose.model('Post', PostSchema);
export default Post; 
