'use strict';
let assert = require('assert');
let HashTable = require('./HashTable.js');
let Int = require('./IntHash.js');
let String = require('./StringHash.js');
let keyValue = require('./KeyValueHash.js');

function testAdd()
{
    console.log("Testing add method...");

    let testTable = new HashTable(10);
    let testVal1 = new Int(23);
    let testVal2 = new String("Skills");
    let testVal3 = new keyValue(testVal2, 100);

    testTable.add(testVal1);
    testTable.add(testVal2);
    
    assert(testTable.contains(testVal1), "Should contain testVal1.");
    assert(testTable.contains(testVal2), "Should contain testVal2.");
    assert(!testTable.contains(testVal3), "Should not contain testVal3.");

    testTable.add(testVal3);

    assert(testTable.contains(testVal3), "Should contain testVal3.");

    testTable.remove(testVal2);

    assert(!testTable.contains(testVal2), "Should not contain testVal2.");

    console.log("\tTest (add) passed.")
}// end testAdd

function testGet()
{

}// end testGet

function testRemove()
{

}// end testRemove

function testContains()
{

}// end testContains

function testIsEmpty()
{

}// end testIsEmpty

function main()
{
    testAdd();
    testGet();
    testRemove();
    testContains();
    testIsEmpty();
    console.log("Hello");
}// end main

main();
