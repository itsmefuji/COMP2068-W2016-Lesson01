///<reference path="../typings/tsd.d.ts"/> 
console.log("App Started...");
var Person = (function () {
    //Constructor Function
    function Person(name) {
        this._name = name;
    }
    //Public Methods
    Person.prototype.speak = function () {
        console.log(this._name + " says Hello.");
    };
    return Person;
})();
var yuji = new Person("Yuji");
yuji.speak();
//# sourceMappingURL=app.js.map