const AbstractManager = require("./AbstractManager");

class TodolistManager extends AbstractManager {
  static table = "todolist";

  insert(todolist) {
    return this.connection.query(
      `insert into ${TodolistManager.table} (todo) values (?)`,
      [todolist.todo]
    );
  }

  update(todolist) {
    return this.connection.query(
      `update ${TodolistManager.table} set todo = ? where id = ?`,
      [todolist.todo, todolist.id]
    );
  }
}

module.exports = TodolistManager;
