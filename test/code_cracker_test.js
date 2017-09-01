const CodeCracker = require('../src/code_cracker');

describe('CodeCracker', () => {
  it('encrypts correctly', () => {
    const msg = 'cab';
    const cracker = new CodeCracker({
      a: '!',
      b: ')',
      c: '"',
      d: '('
    });

    expect(cracker.encrypt(msg)).toBe('"!)');
  });

  it('decrypts correctly', () => {
    const msg = '"!)';
    const cracker = new CodeCracker({
      a: '!',
      b: ')',
      c: '"',
      d: '('
    });

    expect(cracker.decrypt(msg)).toBe('cab');
  });

  it('encrypts hello message correctly', () => {

  });
});
