const { readFile, writeFile, write } = require('fs');

console.log('Start');

readFile('./example/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./example/second.txt', 'utf8', (err, result) => {
        if (err) {
        console.log(err);
        return;
        }  
        const second = result;
        writeFile('./example/result-sync.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
            console.log(err);
            return;
            }
            console.log('Done with this task');
        })
    })
});
console.log('Starting next task');