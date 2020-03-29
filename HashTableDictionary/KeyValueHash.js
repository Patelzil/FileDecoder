'use strict';
let Hashable = require('./Hashable');

class KeyValueHash extends Hashable
{
    constructor(key,value)
    {
        if(key instanceof Hashable) // create KeyValueHash only if the key is of hashable type
        {
            super();
            this.key = key;
            this.value = value;
        }
        else
        {
            throw new Error("Key not of Hashable type.");
        }
    }// end constructor

    get keyValue()
    {
        return this.key;
    }// end keyValue (accessor)

    // set key(newKey)
    // {
    //     this.key = newKey;
    // }

    /* hashVal
     * Purpose - returns hash value to be used for insertion
     */
    hashVal()
    {
        return this.key.hashVal();
    }// end hashVal

    /* equals
     * Purpose - checks if the parameter passed is equal to 
     *          another object of type Hashable
     * @param x - object used to compare with this object
     */
    equals(x)
    {
        if(x instanceof KeyValueHash)
        {
            return this.key === x.keyValue; // equal if the keys are both the same
        }
    }// end equals
}// end class

module.exports = KeyValueHash;