const Greeter = require('../src/greeter');

describe('greeter', () => {
  it('prints a welcome message', () => {
    const greeter = new Greeter('Lewis');

    expect(greeter.getMessage()).toEqual('Hello, Lewis!');
  });
});
