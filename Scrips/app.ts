///<reference path="../typings/tsd.d.ts"/> 

console.log("App Started...");

class Person{
    //Private Instance Variables
    private _name:string;
    
    //Constructor Function
    constructor(name:string){
        this._name = name; 
    }
    
    //Public Methods
    public speak():void{
        console.log(this._name + " says Hello.");
    }
}

var yuji:Person = new Person("Yuji"); 
yuji.speak(); 