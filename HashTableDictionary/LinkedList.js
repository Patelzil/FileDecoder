'use strict';
let Node = require('./Node.js')

class LinkedList 
{

    #_head;
    constructor() 
    {
        this.#_head = null;
    }// end constructor

    /*insert
     *Purpose - insert at the front of the linked list
     *@param data - item to be inserted
     */
    insert(data) 
    { 
        this.#_head = new Node ( data, this.#_head);
    }// end insert
    
    /*search
     *Purpose - search for the item in the linked list
     *@param data - item to be searched
     */
    search(data)
    {
        
    }// end search

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