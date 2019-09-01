function log(constructor: Function): void{
    console.log('Registered	Class: ' + constructor['name'] +'at ' + Date.now()); 
}

function logm<T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): void {
    console.log('registered method: ' + propertyKey.toString() + ' at ' + Date.now());
}

function logparam (target: Object, propertyKey: string | symbol, parameterINdex: number): void{
    console.log('Registered parameter: ' + propertyKey.toString() + ' - ' + parameterINdex + ' at ' + Date.now());
}

@log
class MyClass{
    public name: string = 'name';
    constructor() {
        console.log('constructor');
    }

    @logm
    public myMethod(){
        console.log('method')
    }

    @logm
    public myMethod2(param1: number, @logparam param2: boolean){
        console.log('mehotd2')
    }
}

var myClass = new MyClass();
myClass.myMethod();
myClass.myMethod2(1, false);