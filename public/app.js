import { Tester } from "./test/Tester.js";

const buttonTag = document.getElementById('exampleButton');
buttonTag.addEventListener('click', buttonClick);

console.log("App.js loading");

function buttonClick() {
    let tester = new Tester();
    tester.start();
}