class Node 
{
    #_value;
    #_next;
    
    constructor(value,next) 
    {
        this.#_value = value;
        this.#_next = next;
    }    

    get value() 
    {
        return this.#_value;
    }

    get next()
    {
        return this.#_next;
    }

}

module.exports = Node;