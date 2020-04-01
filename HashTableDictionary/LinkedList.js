// CLASS: LinkedList
//
// Author: Patel Zil, 7876456
//
// REMARKS: Implements a linked list. (used by Hash Table)
//
//-----------------------------------------

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
    search(newData)
    {
        let curr = this.#_head;
        let found = false; // for loop condition
        let returnVal = null;

        while(curr != null && !found)
        {
            if(curr.data.equals(newData))
            {
                returnVal = curr.data;
                found = true;
            }
            else
            {
                curr = curr.next;
            }
        }
        return returnVal;
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
        while((curr != null) && !(curr.data.equals(data)))
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

    /*isEmpty
     *Purpose - returns true if the linked list is empty
     */
    isEmpty()
    {
        return this.#_head == null;
    }// end isEmpty

    print() 
    { 
        let out = "[";
        let curr = this.#_head;
        while (curr != null) 
        { 
            out += curr.data.key.value + " ";
            curr = curr.next;
            
        }
        out += "]";
        console.log(out);
    }
}

module.exports = LinkedList;