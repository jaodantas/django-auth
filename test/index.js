const fs = require('fs');
const path = require('path');

(() => {
    const folder = fs.readdirSync(__dirname)
    const testFiles = folder.filter(file => file.endsWith('.test.js'));

    testFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        require(filePath);
    });
})();
