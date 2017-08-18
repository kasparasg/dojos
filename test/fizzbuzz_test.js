describe('fizzbuz', () => {
  it('displays "fizz" when the iterator is a multiple of 3', () => {
    const fizzbuzzer = new FizzBuzz(0, 100);

    expect(fizzbuzzer.isFizz(3)).toBe(true);
    expect(fizzbuzzer.isBuzz(3)).toBe(false);
  });

  it('displays "buzz" when the iterator is a multiple of 5', () => {
    const fizzbuzzer = new FizzBuzz(0, 100);

    expect(fizzbuzzer.isFizz(5)).toBe(false);
    expect(fizzbuzzer.isBuzz(3)).toBe(true);
  });

  it('displays "fizzbuzz" when the iterator is a multiple of 3 and 5', () => {
    const fizzbuzzer = new FizzBuzz(0, 100);

    expect(fizzbuzzer.isFizz(15)).toBe(true);
    expect(fizzbuzzer.isBuzz(15)).toBe(true);

  });
});
