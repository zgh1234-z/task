// const name = document.getElementById("name").value;
// const text = document.getElementById("text").value;
class Generaltext {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.Date = new Date();
    this.done = false;
  }

  Done() {
    this.done != this.done;
  }

  getinfo() {
    return {
      text: this.text,
      Date: this.Date,
      id: this.id,
      done: this.done,
    };
  }
}

class Tasklevel extends Generaltext {
  constructor(text, id, level) {
    super(text, id);
    level = this.level;
  }
  getinfo() {
    return {
      text: this.text,
      id: this.id,
      level: this.level,
    };
  }
}

class Time extends Generaltext {
  constructor(text, id, Expiration) {
    super(text, id);
    Expiration = this.Expiration;
  }

  Expirationdate() {
    return this.Expiration > new Date();
  }

  getinfo() {
    return {
      text: this.text,
      id: this.id,
      Expiration: this.Expiration,
    };
  }
}

class Settings {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
  }

  remove(id) {
    this.tasks = tasks.filter((id) => task.id != id);
  }

  getDone() {
    return this.tasks.filter((task) => task.done);
  }
  notgetDone() {
    return this.tasks.filter((task) => !task.done);
  }
  History() {
    return this.task.filter((task) => task instanceof Time && Expirationdate());
  }
}

const manage = new Settings();
const task1 = new Tasklevel(1, "وظیفه اول", "اسان");
const task2 = new Tasklevel(2, "وظیفه دوم ل", "سخت");
const task3 = new Time(3, "وظیفه سوم", new Date());

manage.add(task1);
manage.add(task2);
manage.add(task3);
task1.Done();

console.log(manage.tasks);
console.log(manage.getDone());
console.log(manage.notgetDone());
console.log(manage.History());
