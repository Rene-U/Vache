
let information = require("./information.js");
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : information.name + " " + information.campus,
    e : "oO",
    T : "U "
}));

