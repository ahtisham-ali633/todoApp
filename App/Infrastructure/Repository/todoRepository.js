import Post from '../Models/Mongoose/todoModel';
import TodoEntity from '../../Domain/Entites/todoItemEntity';
import PaginationData from '../Utils/paginationData';
import PaginationOption from '../Utils/paginationOption';

class TodoRepository {
    static async fetchPosts(params) {
        const totalPost = await Post.count();
        console.log(totalPost)

        const paginationData = new PaginationData(new PaginationOption(params.page, params.limit), totalPost);

        const allPosts = await Post.find()
        .limit(paginationData.paginationOption.limit())
        .skip(paginationData.paginationOption.offset());
        const posts = allPosts.map(post => {
            // return TodoEntity.createFromObject(post);
            paginationData.addItem(TodoEntity.createFromObject(post))
        }) 
        return paginationData.paginationItems();
    }

    static async fetchById({id}) {
        const post = await Post.findOne({_id: id})
        return TodoEntity.createFromObject(post)
    }

    static async createPost(data) {
        const post = new Post(data)
        post.todoId = TodoEntity.generateId();
        const newPost = await post.save();
        return TodoEntity.createFromObject(newPost);

    }

    static async updatePost(todo) {
        const updatedTodo = await Post.findByIdAndUpdate({ _id: todo.id }, { title: todo.title, description: todo.description }, { new: true });

        if(updatedTodo) {
            return TodoEntity.createFromObject(updatedTodo);
        }
    }

    static async removePost(todo) {
        const result = await Post.findByIdAndDelete({ _id: todo.id});
        return result;
    }
}

export default TodoRepository;