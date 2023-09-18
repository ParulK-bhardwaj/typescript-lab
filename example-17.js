"use strict";
// Giant Robot class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
var Robot = /** @class */ (function () {
    function Robot(name, type, power) {
        this.name = name;
        this.type = type;
        this.power = power;
    }
    Robot.prototype.describe = function () {
        console.log("name: ".concat(this.name, " type: ").concat(this.type, " power: ").concat(this.power));
    };
    return Robot;
}());
exports.Robot = Robot;
var robot = new Robot("GROOT", "I AM GROOT", 60);
robot.describe();
