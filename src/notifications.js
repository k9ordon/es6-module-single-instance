export class Notifications {

  constructor() {
    this.messages = [];
  }

  add(message) {
    this.messages.push(message);
    
    // debug
    document.write(`<p>${this.messages.length} - ${message}</p>`);
    console.log('messages', this.messages);
  }
}

export let notifications = new Notifications();;