'use strict';
let LinkedList = require('./LinkedList.js');

class HashTable
{
    #_myArray;
    constructor(size)
    {
        this.#_myArray = new Array(size);
    
        // initialize each array element with linked list
        for(let i=0; i<size; i++)
        {
            this.#_myArray[i] = new LinkedList();
        }
    }// end constructor

    /* add
     * Purpose - adds object x into hashtable in its appropriate position
     * @param x - hashable object to be inserted into the table 
     */
    add(x)
    {

    }// end add

    /* get
     * Purpose - eturns the first occurrence equal to x in the hash table
     * @param x - hashable object to be returned from the table 
     */
    get(x)
    {

    }// end get

    /* remove
     * Purpose - deletes one occurrence of an object equal to x
     * @param x - hashable object to be removed from the table 
     */
    remove(x)
    {

    }// end remove

    /* contains
     * Purpose -
     * @param x - hashable object to be searched for from the table 
     */
    contains(x)
    {

    }// end contains

    /* isEmpty
     * Purpose - returns a boolean determining whether the hash table is empty or not
     */
    isEmpty()
    {

    }// end isEmpty
}// end class

module.exports = HashTable;