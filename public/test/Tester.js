
import * as Campus from "../model/campus.js";

export class Tester{
    start(){
        console.log("Tester starting");
        this.testCore();
    }

    testCore(){
        console.log("Core Test Started");
        this.testCampus();
    }

    testCampus(){
        let testCampus = new Campus("Test campus");
        console.log(testCampus.title);
    }
}