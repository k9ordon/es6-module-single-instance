import { notifications } from "./notifications.js";

export class Child {

  constructor(name) {
    this.name = name;

    notifications.add('yolo from ' + this.name)
  }
  
}