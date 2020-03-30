'use strict';
let Hashable = require('./Hashable');

class KeyValueHash extends Hashable
{
    constructor(key,value)
    {
        if(key instanceof Hashable) // create KeyValueHash only if the key is of hashable type
        {
            super();
            this._key = key;
            this._value = value;
        }
        else
        {
            throw new Error("Key not of Hashable type.");
        }
    }// end constructor

    get key()
    {
        return this._key;
    }// end keyValue (accessor)

    get value()
    {
        return this._value;
    }

    set val(newKey)
    {
        this._value = newKey;
    }

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
        let isEqual;
        if(x instanceof KeyValueHash)
        {
            isEqual = this._key === x._key; // equal if the keys are both the same
        }
        else
        {
            isEqual = false;
        }
        return isEqual;
    }// end equals
}// end class

module.exports = KeyValueHash;