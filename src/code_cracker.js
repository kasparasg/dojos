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
    const alpha = this.map.keys();
    const tokens = this.map.values();

    return chars.map({
      

    }).join('');
  }
};
