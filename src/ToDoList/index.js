import Row from "../components/Row";

export default class ToDoList {
    constructor() {
        this.addRow = this.addRow.bind(this);
        this.list = [];
        this.todoBox = document.createElement("div");
        this.input = document.createElement("input");
        this.addButton = document.createElement("button");
        this.addButton.innerText = "Add";
        this.addButton.addEventListener("click", this.addRow);
        this.listBox = document.createElement("div");
        this.todoBox.append(this.input);
        this.todoBox.append(this.addButton);
        this._box = document.createElement("div");
        this._box.append(this.listBox);
        this._box.append(this.todoBox);
    }

    addRow(arg) {
        const value = this.input.value;
        const row = new Row(value);
        this.list.unshift(row);
        this.render();
    }

    render() {
        const htmlRows = this.list.forEach((item) => this.listBox.append(item.html)
        );
    }

    get html() {
        return this._box;
    }
}
