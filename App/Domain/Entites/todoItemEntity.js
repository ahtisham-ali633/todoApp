class TodoEntity {
    constructor(todoId, title, description) {
        this.todoId = todoId;
        this.title = title;
        this.description = description
    }

    static createFromObject(data) {
        return new TodoEntity(data.id, data.title, data.description)
    }
}

export default TodoEntity;