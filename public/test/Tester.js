
import { AccessibleDoor } from "../model/AccessibleDoor.js";
import {Building} from "../model/Building.js";
import {Campus} from "../model/campus.js";
import { Waypoint } from "../model/Waypoint.js";
import {Point} from "../model/Point.js"

export class Tester{
    constructor(){
        this.testCampus1 = null;
        this.testBuilding1 = null;
    }

    start(){
        console.log("Tester starting... ");
        this.testCore();
    }

    testCore(){
        console.log("Core Test Started...");

        this.testCampus();
        this.testBuilding();
        this.testAccessibleDoor();
    }

    testCampus(){
        console.log("Testing Campus class...");

        this.testCampus1 = new Campus("Test campus");
        console.log("Test Campus Title: " , this.testCampus1.title);
    }

    testBuilding(){
        console.log("Testing Building class...");

        this.testBuilding1 = new Building("Test Building");
        console.log("Test Building Title: ", this.testBuilding1.title);
        this.testCampus1.addBuilding(this.testBuilding1);

        console.log("Testing Waypoint...")
        this.newWaypoint = new Waypoint(new Point(5.4, 5.4), false);
        console.log("Waypoint latitude: ", this.newWaypoint.latitude, ", longitude: ", this.newWaypoint.longitude);
    }

    testAccessibleDoor(){
        console.log("Testing AccessibleDoor class...");
        
        this.accDoor1 = new AccessibleDoor(new Waypoint(new Point(5.4, 5.3)));
        console.log("AccessibleDoor.latitude: ", this.accDoor1.latitude);
        console.log("AccessibleDoor.longitude: ", this.accDoor1.longitude);
    }
}