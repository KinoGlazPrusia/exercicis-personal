import {Transform} from "../engine/transform.js";

export class NpcController {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;

        this.transform = new Transform();
    }

    getFullName() {
        return this.name + " " + this.surname;
    }
}