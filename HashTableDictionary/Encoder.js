'use strict';
let Dictionary = require('./Dictionary.js');
let StringHash = require('./StringHash.js');
let fs = require('fs');

class Encoder
{
    constructor(fileName)
    {
        this._file = fileName;
        this._myDictionary = new Dictionary();
        this.loadCodes();
    }

    /*encode
     *Purpose - opens a new output file (.lzw ext.), opens the input file
     *          and implements LZW algorithm.
     */
    encode()
    {
        this.output = this._file.substr(0,this._file.lastIndexOf(".")) + ".lzw";
        // console.log("before " + this.output);
        fs.openSync(this.output, 'w');
        this.contents = fs.readFileSync(this._file,"utf-8");
        this.contents = this.contents.replace(/(\n|\t)/gm,"");

        this.index = 1; // used inside the loop
        this.number = 95;
        this.temp_key = this.contents[0];
        this.curr_key = new StringHash(this.temp_key);
        console.log(this.curr_key)

        console.log("before while loop.");
        console.log("Get:"+this._myDictionary.get(this.curr_key))
        while(this.index < 27)
        {
            console.log("in while loop.");
            this.last_key = this.temp_key;
            this.temp_key += this.contents[this.index]
            this.curr_key = new StringHash(this.temp_key); 
            this._myDictionary.put(this.curr_key,this.number);
            fs.appendFileSync(this.output, (this._myDictionary.get(new StringHash(this.last_key)))+"\n");
            this.temp_key = this.temp_key.charAt(this.temp_key.length-1);
            this.index++;
            this.number++;
        }
        console.log("after while loop.");
        fs.appendFileSync(this.output, -1);
    }// end encode

    /*loadCodes
     *Purpose - fills the dictionary with the character and its LZW encoding
     */
    loadCodes()
    {
        for(let i=32; i<=126; i++)
        {
            let key = new StringHash(String.fromCharCode(i));
            this._myDictionary.put(key,(i-32));
        }
    }// end loadCodes
}// end class

module.exports = Encoder;