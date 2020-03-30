'use strict';
let Hashable = require('./Hashable');

class StringHash extends Hashable
{
    constructor(value)
    {
        super();
        this.strVal = value;
    }// end constructor

    get value()
    {
        return this.strVal;
    }// end value

    /* hashVal
     * Purpose - returns hash value to be used for insertion
     */
    hashVal()
    {
        let size = this.strVal.length;
        let value = 0; // return value
        let prime = 13; // a prime number of my choice

        for(let i = 0; i < size; i++)
        {
            value += this.strVal.charCodeAt(i)*Math.pow(prime,(size-(i+1)));
        }

        return value;
    }// end hashVal

    /* equals
     * Purpose - checks if the parameter passed is equal to 
     *          another object of type Hashable
     * @param x - object used to compare with this object
     */
    equals(x)
    {
        let isEqual;
        if(x instanceof StringHash)
        {
            isEqual = (this.value === x.value);
        }
        else
        {
            isEqual = false;
        }
        return isEqual;
    }// end equals
}// end class

module.exports = StringHash;