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

    console.log("\tTest (add method) passed.");
}// end testAdd

function testGet()
{
    console.log("Testing get method...");

    let testTable = new HashTable(10);
    let testVal1 = new Int(99);
    let testVal2 = new Int(18);
    let testVal3 = new keyValue(testVal2, 12);

    testTable.add(testVal1);
    testTable.add(testVal2);
    testTable.add(testVal1);

    assert(testTable.get(testVal1) == testVal1, "Hash table should contain testVal1.");
    assert(testTable.get(testVal2) == testVal2, "Hash table should contain testVal2.");

    testTable.remove(testVal1); // yet contains the second testVal1
    assert(testTable.get(testVal1) == testVal1, "Hash table should contain testVal1.");

    testTable.remove(testVal2);
    try
    {
        assert(testTable.get(testVal2) == testVal2, "Hash table should not contain testVal2.");
        assert(testTable.get(testVal3) == testVal3, "Hash table should not contain testVal3.");
    }
    catch(error)
    {
        assert(error);
    }

    testTable.add(testVal3);

    assert(testTable.get(testVal3) == testVal3, "Hash table should contain testVal3.");    

    console.log("\tTest (get method) passed.");
}// end testGet

function testRemove()
{
    console.log("Testing remove method...");

    let testTable = new HashTable(10);
    let testVal1 = new Int(99);
    let testVal2 = new Int(18);
    let testVal3 = new keyValue(testVal2, 12);

    assert(testTable.isEmpty(), "Table should be empty.");

    testTable.add(testVal1);
    testTable.add(testVal1);
    testTable.add(testVal2);
    testTable.add(testVal3);

    assert(!testTable.isEmpty(), "Table should not be empty.");

    testTable.remove(testVal1); // remove 1 of testVal1
    testTable.remove(testVal2);
    testTable.remove(testVal3);

    // yet contains the duplicate of testVal1 in it.
    assert(!testTable.isEmpty(), "Table should not be empty.");
    assert(testTable.contains(testVal1), "Should contain testVal1.");

    testTable.remove(testVal1);

    assert(testTable.isEmpty(), "Table should be empty.");

    console.log("\tTest (remove method) passed.");
}// end testRemove

function testContains()
{
    console.log("Testing contains method...");

    let testTable = new HashTable(10);
    let testVal1 = new Int(99);
    let testVal2 = new keyValue(testVal1,20);

    assert(!testTable.contains(testVal1), "Should not contain testVal1.");

    testTable.add(testVal1);
    testTable.add(testVal2);

    assert(testTable.contains(testVal1), "Should not contain testVal1.");
    assert(testTable.contains(testVal2), "Should not contain testVal2.");

    testTable.remove(testVal2);

    assert(!testTable.contains(testVal2), "Should not contain testVal2.");
    assert(testTable.contains(testVal1), "Should contain testVal1.");

    testTable.remove(testVal1);
    assert(!testTable.contains(testVal1), "Should not contain testVal1.");
    assert(testTable.isEmpty(), "Should be empty.");

    console.log("\tTest (contains method) passed.");
}// end testContains

function testIsEmpty()
{
    console.log("Testing isEmpty method...");

    let testTable = new HashTable(10);
    let testVal1 = new Int(18);

    assert(testTable.isEmpty(), "Hash table should be empty.");

    testTable.add(testVal1)

    assert(!testTable.isEmpty(), "Hash table should not be empty.");

    console.log("\tTest (isEmpty method) passed.");
}// end testIsEmpty

function main()
{
    testAdd();
    testGet();
    testRemove();
    testContains();
    testIsEmpty();
}// end main

main();
