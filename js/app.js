import { Application } from "js/appBase.js"

let application = new Application();

window.onload = (event) => {
    console.log("page was loaded");
    // Restore/Create New Application Class
    application.init();

};