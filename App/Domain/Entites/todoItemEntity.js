import BaseEntity from "./baseEntity";

class TodoEntity extends BaseEntity {
    constructor(todoId, id, title, description) {
        super();
        this.todoId = todoId;
        this.id = id;
        this.title = title;
        this.description = description;
    }

    static createFromObject(data) {
        const post = new TodoEntity(TodoEntity.generateId(), data.id, data.title, data.description);
        return post;
    }


}

export default TodoEntity;