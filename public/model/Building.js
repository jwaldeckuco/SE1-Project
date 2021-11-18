
export class Building{
    /**
     * 
     * @param {string} title - The name of the building
     */
    constructor(title){
        this._title = title;
    }

    /**
     * @return {string} - The name of the building
     */
    get title(){
        return this._title;
    }

    /**
     * @param {string} - The name of the building
     */
    set title(title){
        this._title = title;
    }
}