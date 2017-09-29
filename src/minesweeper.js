module.exports = class Minesweeper {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;

    this.map = this.map();
  }

  map() {
    const row = new Array(this.columns).fill('.');
    const rows = new Array(this.rows).fill(row);
    return rows;
  }
};
