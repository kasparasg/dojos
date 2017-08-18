module.exports = class FizzBuzz {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  run() {

    let output = [];

    for (let i = this.min, msg = ""; i <= this.max; i++) {

      if (this.isFizz(i)) {
        msg += "fizz";
      }
      if (this.isBuzz(i)) {
        msg += "buzz";
      }

      if (!msg) {
        msg = i;
      }

      output.push(msg);
    }

    return output;
  }

  isFizz(number) {
    return !(number % 3);
  }

  isBuzz(number) {
    return !(number % 5);
  }
};
