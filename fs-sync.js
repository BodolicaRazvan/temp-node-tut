const { readFileSync, writeFileSync } = require('fs');

console.log('Start');

const first = readFileSync('./example/first.txt', 'utf8');
const second = readFileSync('./example/second.txt', 'utf8');

writeFileSync('./example/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' });

console.log('Done with this task');
console.log('Strating the next one');


