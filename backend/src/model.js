import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const UserSchema = new Schema({
 name: String,
 email: String,
 post:[{type:mongoose.Types.ObjectId,ref:'Post'}],
});
const User = mongoose.model('User', UserSchema);

const PostSchema = new Schema({
 id: Number, // Number is shorthand for {type: Number}
 user: {type:mongoose.Types.ObjectId,ref:'User'},
 title: String,
 content: String,
});
const Post = mongoose.model('Post', PostSchema);

const BookSchema = new Schema({
 name: String,
 author: String,
 img: String,
 description: String,
 src: String,
 rank: Number,
 comment:[{type:mongoose.Types.ObjectId,ref:'Post'}],
});
const Book = mongoose.model('Book', BookSchema);
export {User,Post,Book}; 
