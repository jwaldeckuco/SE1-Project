
import {Building} from "./Building.js"

export class Campus{
    /**
     * 
     * @param {string} title 
     */
    constructor(title){
        this._title = title;
        this._buildings = [];
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

    /**
     * Adds the supplied building to the campus, if it does not already exist
     * @param {Building} building - The building to add to Campus
     */
    addBuilding(building){
        if(!this.hasBuilding(building)){
            this._buildings.push(building);
        }
    }

    removeBuilding(building){
        if(this._buildings.indexOf(building) != -1){

        }
    }

    /**
     * Returns the _buildings index of the supplied building
     * or -1 if it is not found
     * @param {Building} building - The Building to find 
     * @returns {Building|number}
     */
    _getBuildingIndex(building){
        return this._buildings.indexOf(building);
    }

    /**
     * Returns true if the building belongs to the Campus object
     * Or returns false if it does not
     * @param {Building} building - The Building to find
     * @returns {boolean}
     */
    hasBuilding(building){
        if(this._getBuildingIndex(building) != -1){
            return true;
        }
        else return false;
    }
}
