import Row from "../components/Row";

export default class ToDoList {
    constructor() {
        this.list = [];
        this.todoBox = document.createElement("div");
        this.input = document.createElement("input");
        this.addButton = document.createElement("button");
        this.listBox = document.createElement("div");
        this.todoBox.append(this.input);
        this.todoBox.append(this.addButton);
        this._box = document.createElement("div");
        this._box.append(this.listBox);
        this._box.append(this.todoBox);
    }

    addRow(arg) {
        const value = arg.target.value;
        const row = new Row(value);
        this.list.push(row);
        this.render();
    }

    render() {
        const htmlRows = this.list.map((item) => item.html);
        this.listBox.append(htmlRows);
    }

    get html() {
        return this._box;
    }
}
