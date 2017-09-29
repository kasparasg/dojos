module.exports = class Minesweeper {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;

    this.map = this.createMap();
  }

  createMap() {
    const positionMine = (map) => {
      // ...
    };

    const row = new Array(this.columns).fill('.');
    const rows = new Array(this.rows).fill(row);

    return rows;
  }

  countMines() {
    // Create an internal function that position a mine based on a ratio
    // Then calculate how many mines we have on the map and return the number
    return 1;
  }
};
