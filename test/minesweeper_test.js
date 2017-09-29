const Minesweeper = require('../src/minesweeper');

describe('minesweeper', () => {
  describe('map method', () => {
    it('given 2 rows and 4 columns, i see the map', () => {
      //method creates array of arrays = map
      //method that prints the map as a string (with . and *)
      //
      const sweeper = new Minesweeper(2,4);

      const expected =
      [
        ['.','.', '.', '.'],
        ['.','.', '.', '.']
      ];

      expect(sweeper.map()).toEqual(expected);
    });
  });
});
