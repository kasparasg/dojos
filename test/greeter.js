const greeter = require('../src/greeter');

describe('greeter', () => {
  it('prints a welcome message', () => {
    const msg = greeter('Lewis');

    expect(msg).toEqual('Hello, Lewis!');
  });
});
