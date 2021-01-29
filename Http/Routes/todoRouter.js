import express from 'express';
const todoRouter = express.Router();
import TodoController from '../Controller/todoController';
import userAuth from '../Middleware/auth';


todoRouter.get('/', userAuth, TodoController.fetchPosts);

todoRouter.get('/:id', userAuth, TodoController.fetchOnePost);

todoRouter.post('/create', userAuth, TodoController.createPost);

todoRouter.put('/update/:id', userAuth, TodoController.updatePost);

todoRouter.delete('/remove/:id', userAuth, TodoController.removePost);

export default todoRouter;