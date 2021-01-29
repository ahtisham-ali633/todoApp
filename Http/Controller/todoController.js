import TodoService from '../../App/Application/Services/TodoService/todoService';
import FetchOnePostAndRemovePostDTO from '../../App/Application/Services/TodoService/fetchOnePost&RemovePostDTO';
import CreatePostDTO from '../../App/Application/Services/TodoService/createPostDTO';
import UpdatePostDTO from '../../App/Application/Services/TodoService/updatePostDTO';

class TodoController {
    static async fetchPosts(req, res,) {
        const posts = await TodoService.fetchPosts(req.query);
        res.status(posts.code).json(posts);
    }

    static async fetchOnePost(req, res) {
        const {id} = req.params;
        const input = new FetchOnePostAndRemovePostDTO(id);
        const post = await TodoService.fetchOnePost(input);
        res.status(post.code).json(post);
    }

    static async createPost(req, res) {
        const {title, description} = req.body;
        const input = new CreatePostDTO(title, description); 
        const post = await TodoService.createPost(input);
        res.status(post.code).json(post);
    }

    static async updatePost(req, res) {
        const {id} = req.params;
        const {title, description} = req.body;
        const input = new UpdatePostDTO(id, title, description);
        const edit = await TodoService.updatePost(input);
        res.status(edit.code).json(edit);
    }

    static async removePost(req, res) {
        const {id} = req.params;
        const input = new FetchOnePostAndRemovePostDTO(id);
        const postDelete = await TodoService.removePost(input);
        res.status(postDelete.code).json(postDelete);
    }
}

export default TodoController;