const Minesweeper = require('../src/minesweeper');

describe('minesweeper', () => {
  describe('map method', () => {
    it('given 2 rows and 4 columns with zero mines, i see the map', () => {
      const sweeper = new Minesweeper(2, 4, 0);

      const expected = [
        ['.', '.', '.', '.'],
        ['.', '.', '.', '.']
      ];

      expect(sweeper.createMap()).toEqual(expected);
    });
    
    it('generates 3 mines', () => {
      const sweeper = new Minesweeper(2, 4, 3);
      
      expect(sweeper.mines.length).toEqual(3);
    });
  });
  
  describe('generateMines()', () => {
    it('gens 3 mins', () => {
      const sweeper = new Minesweeper(2, 4, 3);
      
      expect(sweeper.generateMines(3).length).toEqual(3);
    });
  });
});

/*
Mines = [
 [4, 0],
 [1, 1],
 [3, 2]
]

Visual representation
. 1 . 1 * 1
1 * 2 . 1 .
. 2 * 1 . .
*/

