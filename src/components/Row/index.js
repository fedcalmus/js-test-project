export default class Row {
    constructor(value, removeCallback) {
        this.value = value;
        this.remove = this.remove.bind(this);
        // this.edit = this.edit.bind(this);
        this._box = document.createElement("div");
        this._box.className = "flex items-center justify-center";
        this.paragraph = document.createElement("p");
        this.paragraph.innerText = this.value;
        // this.editBox = document.createElement("input");
        // this._box.append(this.editBox);
        this._box.append(this.paragraph);
        this.removeButton = document.createElement("button");
        this.removeButton.innerText = ("Remove");
        this.removeButton.addEventListener("click", this.remove);
        this._box.append(this.removeButton);
    }

    remove(){
        this._box.remove();
        removeCallback && removeCallback();
    }
    // edit(){
    //     this.editBox.value = this.value;
    // }

    get html(){
        return this._box;
    }

}
