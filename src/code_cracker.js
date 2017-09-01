module.exports = class CodeCracker {
  constructor(map) {
    this.map = map;
  }

  encrypt(msg) {
    let chars =  msg.split('');

    return chars.map(c => this.map[c]).join('');
  }

  decrypt(msg) {
    let chars = msg.split('');
    const alpha = Object.keys(this.map);
    const tokens = this.values(this.map);

    return chars.map((c) => {
      return alpha[tokens.indexOf(c)];
    }).join('');
  }

  values(map) {
    return Object.keys(map).map((key) => {
      return map[key];
    });
  }
};
