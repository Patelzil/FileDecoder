'use strict';
let Hashable = require('./Hashable');

class IntHash extends Hashable
{
    constructor(value)
    {
        super();
        this.intVal = value;
    }// end constructor

    get value()
    {
        return this.intVal;
    }// end value

    /* hashVal
     * Purpose - returns hash value to be used for insertion
     */
    hashVal()
    {
        return this.intVal;
    }// end hashVal

    /* equals
     * Purpose - checks if the parameter passed is equal to 
     *          another object of type Hashable
     * @param x - object used to compare with this object
     */
    equals(x)
    {
        let isEqual;
        if(x instanceof IntHash)
        {
            isEqual = this.value === x.value;
        }
        else
        {
            isEqual = false;
        }
        return isEqual;
    }// end equals
}// end class

module.exports = IntHash;