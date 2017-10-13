module.exports = class Minesweeper {
  constructor(rows, columns, numMines) {
    this.rows = rows;
    this.columns = columns;

    this.map = this.createMap();
    this.mines = this.generateMines(numMines);
  }

  createMap() {
    const row = new Array(this.columns).fill('.');
    const rows = new Array(this.rows).fill(row);

    return rows;
  }
  
  generateMines(numMines) {
    const mines = [];
    
    for (let i = 0; i < numMines; i++) {
      const randX = Math.ceil(Math.random() * (this.columns - 1));
      const randY = Math.ceil(Math.random() * (this.rows - 1));
        
      mines.push([randX, randY]);
    }
    
    return mines;
  }
  
  // Notes for next week
  // Pick a spot and calculate the nubmer of mines next to the spot
  // Alfie goes next
};
