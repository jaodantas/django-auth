const assert = require('assert')
const { test } = require('./core')
const { verify } = require("../src");

test("Verify correct password", () => {
    const djangoHash = 'pbkdf2_sha256$24000$MGpI+xNdivzlvj3b$T+2W22VhTrh1eV9Esy2STcBxgj55VQBPnvDaBBliFhQ=';
    const password = 'password';
    const result = verify(password, djangoHash);
    assert.strictEqual(result, true);
});

test("Verify incorrect password", () => {
    const djangoHash = 'pbkdf2_sha256$24000$MGpI+xNdivzlvj3b$T+2W22VhTrh1eV9Esy2STcBxgj55VQBPnvDaBBliFhQ=';
    const password = 'incorrectpassword';
    const result = verify(password, djangoHash);
    assert.strictEqual(result, false);
});