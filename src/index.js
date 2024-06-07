const crypto = require('crypto');

const verify = (password, djangoHash) => {
    const [hashingAlgorithm, iterations, salt, originalHash] = djangoHash.split('$');
    const algorithm = hashingAlgorithm.split('_')[1];
    const derivedKey = crypto.pbkdf2Sync(password, salt, parseInt(iterations), 32, algorithm);
    const newHash = derivedKey.toString('base64');
    return newHash === originalHash;
}

const generateSalt = (length = 12) => {
    return crypto.randomBytes(length).toString('base64');
}

const djangoHash = (password, salt = generateSalt(), iterations = 24000, algorithm = 'sha256') => {
    const derivedKey = crypto.pbkdf2Sync(password, salt, parseInt(iterations), 32, algorithm).toString('base64');
    return `pbkdf2_${algorithm}$${iterations}$${salt}$${derivedKey}`;
}

module.exports = { verify, djangoHash };