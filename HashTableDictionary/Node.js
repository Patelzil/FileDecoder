// CLASS: Node
//
// Author: Patel Zil, 7876456
//
// REMARKS: Implements Node
//
//-----------------------------------------

class Node 
{
    #_data;
    #_next;
    
    constructor(data,next) 
    {
        this.#_data = data;
        this.#_next = next;
    }    

    get data() 
    {
        return this.#_data;
    }

    get next()
    {
        return this.#_next;
    }

    set next(theNext)
    {
        this.#_next = theNext;
    }
}

module.exports = Node;