const fail = [];

const test = (description, fn) => {
    try {
        fn();
        console.log(`✓ ${description}`);
    } catch (error) {
        console.error(`✗ ${description}`);
        console.error(error.message);
        fail.push(description);
    }
}

module.exports = { test, fail };