import TodoList from "./ToDoList";
export default class App {
    constructor() {
        const todo = new TodoList();
        this._box = todo.html;
    }

    get html() {
        return this._box;
    }
}
