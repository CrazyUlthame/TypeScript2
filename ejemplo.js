var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("World");
var button = document.createElement('button');
button.textContent = "say hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
