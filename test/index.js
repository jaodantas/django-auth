const fs = require('fs');
const path = require('path');
const { fail } = require('./core');

(() => {
    const folder = fs.readdirSync(__dirname)
    const testFiles = folder.filter(file => file.endsWith('.test.js'));

    testFiles.map(file => {
        const filePath = path.join(__dirname, file);
        console.log(`Running ${file}`);
        require(filePath);
    });

    if (fail.length > 0) {
        console.error(`\n${fail.length} test(s) failed:`);
        fail.map(file => console.error(`✗ ${file}`));
        process.exit(1);
    }

})();
