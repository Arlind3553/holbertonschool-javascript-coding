console.log('Welcome to Holberton School, what is your name?');
const readline = require('readline').createInterface({
    input: process.stdin,
});
readline.question('', name => {
    process.stdout.write('Your name is:' + name);
    console.log('This important software is now closing');
    readline.close();
});
