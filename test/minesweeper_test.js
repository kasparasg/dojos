const Minesweeper = require('../src/minesweeper');

describe('minesweeper', () => {
  describe('map method', () => {
    it('given 2 rows and 4 columns, i see the map', () => {
      const sweeper = new Minesweeper(2,4);

      const expected = [
        ['.', '.', '.', '.'],
        ['.', '.', '.', '.']
      ];

      expect(sweeper.createMap()).toEqual(expected);
    });
  });

  describe('countMines()', () => {
    it('returns 2 mines given a map of 2x4', () => {
      const sweeper = new Minesweeper(2,4);

      expect(sweeper.countMines()).toBe(2);
    });
  });
});
