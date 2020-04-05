const uuid = require('uuid');

class Board {
  constructor({ id = uuid(), title = 'Default', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

class Column {
  constructor({ id = uuid(), title = 'New', order = 1 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = {
  Board,
  Column
};
