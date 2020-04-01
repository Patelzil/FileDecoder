// CLASS: Hashable
//
// Author: Patel Zil, 7876456
//
// REMARKS: Implements Hashable object with abstract methods
//          to be implemented by the subclasses
//
//-----------------------------------------

'use strict';

class Hashable
{
    constructor()
    {
        if(this.constructor == Hashable)
        {
            throw new Error("don't create an abstract class.");
        }
    }// end constructor

    /* hashVal
     * Purpose - Abstract class needs to be implemented by the subclasses
     */
    hashVal()
    {
        throw new Error("Missing hashVal function in subclass");
    }// end hashVal

    /* equals
     * Purpose - Abstract class needs to be implemented by the subclasses
     */
    equals(x)
    {
        throw new Error("Missing equals function in subclass");
    }// end equals

}// end class

module.exports = Hashable;