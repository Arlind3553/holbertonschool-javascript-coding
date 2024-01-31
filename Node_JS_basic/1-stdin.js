console.log('Welcome to Holberton School, what is your name?');
const readline = require('readline').createInterface({
    input: process.stdin,
});
readline.question('', name => {
    console.log(`Your name is: ${name}\n`);
    console.log('This important software is now closing');
    readline.close();
});
