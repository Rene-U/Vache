
let information = require(".information");
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : information.name + " " + information.campus,
    e : "oO",
    T : "U "
}));

