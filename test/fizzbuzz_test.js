const FizzBuzz = require('../src/fizzbuzz');

describe('fizzbuz', () => {
  it('displays "fizz" when the iterator is a multiple of 3', () => {
    const fizzbuzzer = new FizzBuzz(1, 15);

    expect(fizzbuzzer.isFizz(3)).toBe(true);
    expect(fizzbuzzer.isBuzz(3)).toBe(false);
  });

  it('displays "buzz" when the iterator is a multiple of 5', () => {
    const fizzbuzzer = new FizzBuzz(1, 15);

    expect(fizzbuzzer.isFizz(5)).toBe(false);
    expect(fizzbuzzer.isBuzz(5)).toBe(true);
  });

  it('displays "fizzbuzz" when the iterator is a multiple of 3 and 5', () => {
    const fizzbuzzer = new FizzBuzz(1, 15);

    expect(fizzbuzzer.isFizz(15)).toBe(true);
    expect(fizzbuzzer.isBuzz(15)).toBe(true);

  });

  it('runs', () => {
    const fizzbuzzer = new FizzBuzz(1, 15);

    const output = fizzbuzzer.run();
    const expected = [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"];

    expect(output).toEqual(expected);


  });

  it('testing to 100', () => {
    const fizzbuzzer = new FizzBuzz(1, 100);
    const output = fizzbuzzer.run();

    console.log(output.join('\n'));
  });
});
