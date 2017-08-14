module.exports = class Greeter {
  constructor(name) {
    this.name = name;
  }

  getMessage() {
    return `Hello, ${this.name}!`;
  }
};
