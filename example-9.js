"use strict";
// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape
Object.defineProperty(exports, "__esModule", { value: true });
// Import Kaiju and KaijuType from example-8.js
// Fix the rampage function so it makes use of the KaijuType enum
var example_8_js_1 = require("./example-8.js");
function rampage(kaiju, city) {
    var name = kaiju.name, type = kaiju.type, power = kaiju.power;
    var action;
    switch (type) {
        case example_8_js_1.KaijuType.ape:
            action = 'smash';
            break;
        case example_8_js_1.KaijuType.lizard:
            action = 'burn';
            break;
        case example_8_js_1.KaijuType.flying:
            action = 'flap';
            break;
    }
    var result = "".concat(name, " ").concat(action, " over ").concat(city, " causing ").concat(power * 10000, " damage!");
    return result;
}
var gojira = new example_8_js_1.Kaiju('Gojira', example_8_js_1.KaijuType.lizard, 90);
// Define two more monsters
var noName = new example_8_js_1.Kaiju('No Name', example_8_js_1.KaijuType.ape, 1000);
var jhinga = new example_8_js_1.Kaiju('Jhinga', example_8_js_1.KaijuType.flying, 100);
console.log(rampage(gojira, 'tokyo'));
console.log(rampage(noName, 'Delhi'));
console.log(rampage(jhinga, 'New York'));
// Set the new monsts to rampage in a city
