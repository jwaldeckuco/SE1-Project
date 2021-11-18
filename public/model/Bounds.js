
import * as Point from './Point';

export class Bounds{
    
    /**
     * @param {Point} point1 - The upper left corner of the bounds box
     * @param {Point} point2 - The upper right corner of the bounds box
     * @param {Point} point3 - The lower left corner of the bounds box
     * @param {Point} point4 - The lower right corner of the bounds box
     */
    constructor(point1, point2, point3, point4){
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.point4 = point4;
    }

    /**
     * Set the upper left point of the bounds box
     * @param {Point}
     */
    set point1(point){
        this.point1 = point;
    }

    /**
     * Get the upper left point of the bounds box
     * @type {Point}
     */
    get point1(){
        return this.point1;
    }

    /**
     * Set the upper right corner of the bounds box
     */
    set point2(point){
        this.point2 = point;
    }

    /**
     * Get the upper right corner of the bounds box
     * @type {Point}
     */
    get point2(){
        return this.point2;
    }

    /**
     * Set the lower left corner of the bounds box
     * @param {Point}
     */
    set point3(point){
        this.point3 = point;
    }

    /**
     * Get the lower left corner of the bounds box
     * @type {Point}
     */
    get point3(){
        return this.point3;
    }

    /**
     * Set the lower right corner of the bounds box
     * @param {Point}
     */
    set point4(point){
        this.point4 = point;
    }

    /**
     * Get the lower right corner of the bounds box
     * @type {Point}
     */
    get point4(){
        return this.point4;
    }

    /**
     * Determines whether a point is within the bounds box
     * @param {Point} point 
     * @returns {boolean}
     */
    isInBounds(point){
        if(point.latitude >= this.point1.latitude && point.latitude <= this.point2.latitude){
            return (point.longitude <= this.point3.longitude && point.longitude >= this.point1.longitude);
        }
    }
}