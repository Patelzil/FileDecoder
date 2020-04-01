// CLASS: Dictionary
//
// Author: Patel Zil, 7876456
//
// REMARKS: Implements a dictionary using Hash Table
//          that stores keyValueHash object
//
//-----------------------------------------

'use strict'
let hashTable = require('./HashTable.js');
let hashable = require('./Hashable.js');
let keyValue = require('./KeyValueHash.js');

class Dictionary
{
    constructor()
    {
        this.table = new hashTable(1000); // create a hashtable of fixed size (1000)
    }

    /*put
     *Purpose - takes key and value and adds it to the dictionary
     *@param k - key to be added
     *@param v - value of the key
     */
    put(k,v)
    {
        if(k instanceof hashable)
        {
            let key = new keyValue(k,v);
            if(!(this.table.contains(key))) // does not contain then add
            {
                this.table.add(key);
            }
            else // replace the value with v
            {
                this.table.get(key).value = v;
            }
        }
        else
        {
            throw new Error("Key should be of type hashable.");
        }
    }// end put

    /*get
     *Purpose - takes key and returns the value associated with the key
     *@param k - key for which we need its value
     */
    get(k)
    {
        if(k instanceof hashable)
        {
            let key = new keyValue(k,0);
            if(this.table.get(key).equals(key))
            {
                return this.table.get(key).value;
            }
            else
            {
                throw new Error("Key not found.");
            }
        }
        else
        {
            throw new Error("Key should be of type hashable.");
        }
    }// end get

    /*contains
     *Purpose - determines if the key is in the dictionary and returns a boolean
     *@param x - key thats needs to be searched for in the dictionary
     */
    contains(x)
    {
        let isThere = false;
        if(x instanceof hashable)
        {
            let key = new keyValue(x,0);
            // if(this.table.contains(key))
            // {
            //     isThere = true;
            // }
            isThere = this.table.contains(key);
        }
        else
        {
            throw new Error("Key should be of type hashable.");
        }
        return isThere;
    }// end contains

    /* isEmpty
     * Purpose - returns a boolean determining whether the dictionary is empty or not
     */
    isEmpty()
    {
        return this.table.isEmpty();
    }// end isEmpty

    // print()
    // {
    //     this.table.print();
    // }
}// end class

module.exports = Dictionary;