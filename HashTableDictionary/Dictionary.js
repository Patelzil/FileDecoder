'use strict'
let hashTable = require('./HashTable');
let hashable = require('./Hashable');
let keyValue = require('./KeyValueHash');

class Dictionary
{
    constructor()
    {
        this._table = new hashTable(1000); // create a hashtable of fixed size (1000)
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
            if(!(this._table.contains(key))) // does not contain then add
            {
                this._table.add(key);
            }
            else // replace the value with v
            {
                this._table.get(key).val = v;
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

    }// end get

    /*contains
     *Purpose - determines if the key is in the dictionary and returns a boolean
     *@param x - key thats needs to be searched for in the dictionary
     */
    contains(x)
    {

    }// end contains

    /* isEmpty
     * Purpose - returns a boolean determining whether the dictionary is empty or not
     */
    isEmpty()
    {

    }// end isEmpty
}// end class

module.exports = Dictionary;