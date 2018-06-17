/*
 * A very basic Hello world style class for demonstration purposes
 * This simply takes the name of a person and logs a welcome message
 * in the console whenever you execute run().
 */
var Welcomer = /** @class */ (function () {
    function Welcomer(name) {
        this.name = name;
    }
    Welcomer.prototype.run = function () {
        console.log("Hello " + this.name);
    };
    return Welcomer;
}());
