'use strict'
let Encoder = require('./Encoder.js');

function main()
{
    console.log("\nStarted compressing the file.\n");

    let myEncoder = new Encoder(process.argv[2]);
    myEncoder.encode();

    console.log("End of compression.");
}

main();