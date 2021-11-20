
import {Waypoint} from "./Waypoint.js";

export class AccessibleDoor extends Waypoint{
    #point;

    /**
     * 
     * @param {Point} point - The Point at which the door is located
     */
    constructor(point){
        super(point, true);
    }

    /**
     * @return {real} - The latitude of the door
     */
    get latitude(){
        return this.#point.latitude;
    }

    /**
     * @return {real} - The longitude of the door
     */
    get longitude(){
        return this.#point.longitude;
    }
}