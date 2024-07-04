const path = require('path');

console.log(path.sep);

const filePath = path.join('/example', 'test', 'text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'example', 'test', 'text.txt');
console.log(absolute);