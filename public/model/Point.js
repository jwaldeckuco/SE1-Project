

export class Point{
    #latitude;
    #longitude;
    /**
     * The constructor for a point object
     * @param {real} latitude 
     * @param {real} longitude 
     */
    constructor(latitude, longitude){
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    /**
     * @return {real} - Get the Point's latitude
     */
    get latitude(){
        return this.#latitude;
    }

    /**
     * @param {real} - Set the Point's latitude
     */
    set latitude(latitude){
        this.#latitude = latitude;
    }

    /**
     * @return {real} - Get the Point's longitude
     */
    get longitude(){
        return this.#longitude;
    }

    /**
     * @param {real} - Set the Point's longitude
     */
    set longitude(longitude){
        this.#longitude = longitude;
    }
}