'use strict';
let Node = require('./Node.js')

class LinkedList 
{

    #_head;
    constructor() 
    {
        this.#_head = null;
    }

    add (something) 
    { 
        this.#_head = new Node ( something, this.#_head);
    }
    
    print() 
    { 
        let out = "[";
        let curr = this.#_head;
        while (curr != null) 
        { 
            out += curr.value + " ";
            curr = curr.next;
            
        }
        out += "]";
        console.log(out);
    }
}

module.exports = LinkedList;