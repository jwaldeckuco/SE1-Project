import { Waypoint } from "./Waypoint.js";

export class AccessibleWaypoint extends Waypoint{
    /**
     * 
     * @param {Point} point 
     */
    constructor(point){
        super(point);
        this._accessible = true;
    }
}