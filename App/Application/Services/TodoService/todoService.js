import TodoRepository from '../../../Infrastructure/Repository/todoRepository';

class TodoService {
    static async fetchPosts() {
        try{
            const posts = await TodoRepository.fetchPosts();
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

    static async updatePost(data) {
        try{
            const edit = await TodoRepository.updatePost(data);
            return {code: 200, status: 'success', result: edit}
        }catch(e){
            return {code: 500, status: 'error', error: e.message}
        }
    }

    static async removePost(id) {
        try{
            const postDelete = await TodoRepository.removePost(id);
            return {code: 200, status: 'success', result: postDelete}
        }catch(e){
            return {code: 500, status: 'error', error: e.message}
        }
    }
}

export default TodoService;