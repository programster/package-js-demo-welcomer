/*
 * A very basic Hello world style class for demonstration purposes
 * This simply takes the name of a person and logs a welcome message
 * in the console whenever you execute run().
 */
 
class Welcomer 
{
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    run() {
        console.log("Hello " + this.name );
    }
}