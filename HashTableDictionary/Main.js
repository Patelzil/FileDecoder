'use strict'
let Encoder = require('./Encoder.js');

function main()
{
    console.log("\nStarted compressing the file.\n");
    let myEncoder = new Encoder("sample.txt");
    myEncoder.encode();
    console.log("Ended compressing the file successfully.")
}

main();