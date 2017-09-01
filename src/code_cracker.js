module.exports = class CodeCracker {
  constructor(map) {
    this.map = map;
  }

  encrypt(msg) {
    let chars =  msg.split('');

  return chars.map(c => {
    return this.map[c];
  }).join('');

  }

  decrypt(msg) {

  }
};
