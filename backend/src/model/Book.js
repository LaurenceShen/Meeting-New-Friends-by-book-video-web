import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const BookSchema = new Schema({
 name: String,
 author: String,
 img: String,
 description: String,
 src: String,
 rank: Number,
 comment: String,
});
const Book = mongoose.model('Book', BookSchema);
export default Book; 
