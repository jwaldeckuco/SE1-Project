
import * as Building from "./Building.js"

export class Campus{
    /**
     * 
     * @param {string} title 
     */
    constructor(title){
        console.log("Campus constructor");
        this._title = title;
        this._building = [];
    }

    /**
     * @return {string} - The campus title
     */
    get title(){
        return this._title;
    }

    /**
     * @param {string} - The campus title
     */
    set title(title){
        this._title = title;
    }
}
