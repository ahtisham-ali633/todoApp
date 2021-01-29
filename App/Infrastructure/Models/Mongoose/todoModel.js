import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    todoId: {
        type: String,
        required: true,
        unique: true
      },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Post =  mongoose.model('todo', postSchema);
export default Post;