'use strict';
let LinkedList = require('./LinkedList.js');
let Hashable = require('./Hashable.js');

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
        if(x instanceof Hashable)
        {
            let index = x.hashVal() % this.#_myArray.length;
            this.#_myArray[index].insert(x); // insert into the linked list at the index calculated above
        }
        else
        {
            throw new Error("Item not of type hashable");
        }
    }// end add

    /* get
     * Purpose - returns the first occurrence equal to x in the hash table
     * @param x - hashable object to be returned from the table 
     */
    get(x)
    {
        if(x instanceof Hashable)
        {
            let index = x.hashVal() % this.#_myArray.length;
            let myValue = this.#_myArray[index].search(x);

            if(myValue ==  null)
            {
                throw new Error("Item searched not found in the table.");
            }
            else
            {
                return myValue;
            }
        }
        else
        {
            throw new Error("Trying to access non-hashable item.");
        }
    }// end get

    /* remove
     * Purpose - deletes one occurrence of an object equal to x
     * @param x - hashable object to be removed from the table 
     */
    remove(x)
    {
        if(x instanceof Hashable)
        {
            let index = x.hashVal() % this.#_myArray.length;
            this.#_myArray[index].delete(x);
        }
        else
        {
            throw new Error("Trying to remove non-hashable item.");
        }
    }// end remove

    /* contains
     * Purpose - determines if x is in the table
     * @param x - hashable object to be searched for from the table 
     */
    contains(x)
    {
        let isContains = false;
        if(x instanceof Hashable)
        {
            let index = x.hashVal() % this.#_myArray.length;
            let data = this.#_myArray[index].search(x);

            if(data != null) // value found
            {
                isContains = true;
            }
        }
        else
        {
            throw new Error("Searching for a non-hashable item.");
        }

        return isContains;
    }// end contains

    /* isEmpty
     * Purpose - returns a boolean determining whether the hash table is empty or not
     */
    isEmpty()
    {
        let empty = true;
        let i=0;
        while(empty && (i< this.#_myArray.length))
        {
            empty = this.#_myArray[i].isEmpty();
        }

        return empty;
    }// end isEmpty
}// end class

module.exports = HashTable;