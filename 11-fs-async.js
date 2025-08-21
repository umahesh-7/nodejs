
// asynchronous way of reading and writing files
// we need to use callbacks to get the data we want
// this is non-blocking way of reading and writing files

const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done with the writing');
        });
    });
})
console.log('starting the next one');