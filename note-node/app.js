console.log("App is Running!!");

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const notes = require('./notes.js');

// var num = notes.add(9,8);
// console.log(num);

// var user = os.userInfo();
// console.log(user);

// fs.appendFileSync('createdfile.txt',` hello ${user.username} `);

const args = yargs.argv;
console.log(yargs.argv);

// console.log(process.argv);
var command = process.argv[2];

if(command==='add'){
    notes.addNote(args.title,args.body);
}