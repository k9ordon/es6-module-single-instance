import { Notifications, notifications } from "./notifications.js";
import { Child } from "./child.js";

export class Main {
  constructor() {
   notifications.add('yolo 1 from main');
    
    // create new children 
    // (they send messages in constructor)
    let child1 = new Child('le child 1');
    let child2 = new Child('le child 2');

    // send second message from main
    notifications.add('yolo 2 from main');
  }
}

// boostrap
document.addEventListener("DOMContentLoaded", (e) => new Main());