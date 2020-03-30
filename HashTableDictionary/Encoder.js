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
        // this._myDictionary.print();
    }

    /*encode
     *Purpose - opens a new output file (.lzw ext.), opens the input file
     *          and implements LZW algorithm.
     */
    encode()
    {
        this.output = this._file.substr(0,this._file.lastIndexOf(".")) + ".lzw";
        fs.openSync(this.output, 'w'); // open the .lzw file
        this.contents = fs.readFileSync(this._file,"utf-8");
        // this.contents = this.contents.replace(/(\n|\t)/gm,"");

        this.index = 1; // used inside the loop
        this.number = 95;
        this.curr_key = this.contents[0];
        this.temp = new StringHash(this.curr_key);
        // console.log(this.temp)

        // console.log("before while loop.");
        // console.log("Get:"+this._myDictionary.get(this.temp))

        while(this._myDictionary.contains(this.temp))
        {
            // console.log("in while loop.");
            this.last_key = this.curr_key;

            this.curr_key += this.contents[this.index]
            this.temp = new StringHash(this.curr_key);

            this._myDictionary.put(this.temp,this.number);

            fs.appendFileSync(this.output, (this._myDictionary.get(new StringHash(this.last_key)))+"\n");
            fs.appendFile(this.output, index);

            this.curr_key = this.curr_key.charAt(this.curr_key.length-1);

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
            let temp = new StringHash(String.fromCharCode(i));
            this._myDictionary.put(temp,(i-32));
        }
    }// end loadCodes
}// end class

module.exports = Encoder;