//-----------------------------------------
// NAME		        : Patel Zil
// STUDENT NUMBER	: 7876456
// COURSE		    : COMP 2150
// INSTRUCTOR	    : Mike Domaratzki
// ASSIGNMENT	    : assignment 4
// QUESTION     	: question 1 and 2
//
// REMARKS: Compressing file using LZW algorithm
//
//-----------------------------------------

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
