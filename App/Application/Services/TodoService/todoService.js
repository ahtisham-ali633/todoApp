import TodoRepository from '../../../Infrastructure/Repository/todoRepository';

class TodoService {
    static async fetchPosts(params) {
        try{
            const posts = await TodoRepository.fetchPosts(params);
            return {code: 200, status: 'success', result: posts};
        }catch(e){
            return {code: 500, status: 'error', error: e.message};
        }
    }

    static async fetchOnePost(id) {
        try{
            const post = await TodoRepository.fetchOnePost(id);
            return {code: 200, status: 'success', result: post};
        }catch(e){
            return {code: 500, status: 'error', error: e.message};
        }
    }

    static async createPost(data) {
        console.log(data)
        try{
            const post = await TodoRepository.createPost(data)
            return {code: 201, status: 'success', result: post}
        }catch(e){
            return {code: 500, status: 'error', error: e.message}
        }
    }

    static async updatePost(todo) {
        try{
            const edit = await TodoRepository.updatePost(todo);
            return {code: 200, status: 'success', result: edit}
        }catch(e){
            return {code: 500, status: 'error', error: e.message}
        }
    }

    static async removePost(todo) {
        try{
            const postDelete = await TodoRepository.removePost(todo);
            return {code: 200, status: 'success', result: postDelete}
        }catch(e){
            return {code: 500, status: 'error', error: e.message}
        }
    }
}

export default TodoService;