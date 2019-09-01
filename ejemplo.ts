class Greeter {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        return "hello, " + this.greeting;
    }
}

let greeter = new Greeter("World");
let button = document.createElement('button');
button.textContent = "say hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);