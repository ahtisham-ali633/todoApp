import Post from '../Models/Mongoose/todoModel';
import TodoEntity from '../../Domain/Entites/todoItemEntity';

class TodoRepository {
    static async fetchPosts() {
        const allPosts = await Post.find();
        const posts = allPosts.map(post => {
            console.log("todorepository ", post)
            return TodoEntity.createFromObject(post);
        }) 
        return posts;
    }

    static async fetchById({id}) {
        const post = await Post.findOne({_id: id})
        return TodoEntity.createFromObject(post)
    }

    static async createPost({title, description}) {
        const post = new Post({
            title: title,
            description: description
        })
        
        await post.save();
        return post;
    }

    static async updatePost({id, title, description}) {
        await Post.findByIdAndUpdate({ _id: id }, { title: title, description: description }, { new: true });
        return true;
    }

    static async removePost({id}) {
        await Post.findByIdAndDelete({ _id: id });
        return true;
    }
}

export default TodoRepository;