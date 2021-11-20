
/**
 * @property {Point} point - The point of the waypoint
 * @property {boolean} accessible - Whether the Waypoint is accessible
 */
export class Waypoint{
    #point;
    #accessible;
    /**
     * @param {Point} point - The Point(latitude and Longitude) of the Waypoint
     * @param {boolean} accessible - Whether the Waypoint is accessible    
    */
    constructor(point, accessible){
        this.#point = point;
        this.#accessible = accessible;
    }

    /**
     * @return {Point} point - The point of the door
     */
    get point(){
        return this.#point;
    }

    /**
     * @param {Point} point - The point of the door
     */
    set point(point){
        this.#point = point;
    }

    /**
     * Returns whether the Waypoint is accessible or not
     * @returns {boolean}
     */
    isAccessible(){
        return this.#accessible;
    }

    /**
     * 
     * @param {boolean} accessible - Sets whether the Waypoint is accessible
     */
    setAccessible(accessible){
        this.#accessible = accessible;
    }

    /**
     * @return {real} - The Waypoint's longitude
     */
    get longitude(){
        return this.#point.longitude;
    }

    /**
     * @return {real} - The Waypoint's Latitude
     */
    get latitude(){
        return this.#point.latitude;
    }


}