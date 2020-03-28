'use strict';

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
        if(x instanceof IntHash)
        {
            return this.value === x.value;
        }
    }// end equals
}// end class

module.exports = IntHash;