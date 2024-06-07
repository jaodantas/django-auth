const test = require("./core");
const assert = require('assert');
const { djangoHash } = require("../src");

test('Encrypt password', () => {
    const password = 'password';
    const salt = 'MGpI+xNdivzlvj3b';
    const iterations = 24000;
    const algorithm = 'sha256';
    const expectedHash = `pbkdf2_${algorithm}$${iterations}$${salt}$T+2W22VhTrh1eV9Esy2STcBxgj55VQBPnvDaBBliFhQ=`;
    const result = djangoHash(password, salt, iterations, algorithm);
    
    assert.strictEqual(result, expectedHash);
})
