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
        let curr = this.#_head;

        while(curr != null && !curr.value.equals(data))
        {
            curr = curr.next;
        }

        return curr;
    }// end search

    /*delete
     *Purpose - delete/remove data from the linked list
     *@param data - item to be deleted
     */
    delete(data)
    {
        let prev = null;
        let curr = this.#_head;

        // search for the key
        while((curr != null) && !(curr.value.equals(data)))
        {
            prev = curr;
            curr = curr.next;
        }

        // now delete
        if(curr != null) // found the value we want
        {
            if(prev != null)
            {
                prev.next = curr.next;
            }
            else
            {
                this.#_head = curr.next;
            }
        }
    }// end delete

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