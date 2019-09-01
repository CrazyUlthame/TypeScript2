class Disponible {
    isDisposed: boolean;
    dispose(){
        this.isDisposed = true;
    }
}

class Activatable {
    isActive: boolean;
    activate(){
        this.isActive = true;
    }
    desctivate(){
        this.isActive = false;
    }
}

class SmartObject implements Disponible, Activatable {
    constructor(){
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed),500);
    }
    interact(){
        this.activate()
    }

    isDisposed: boolean = false;
    dispose: () => void;

    isActive: boolean = true;
    activate: () => void;
    desctivate: () => void;
}

applyMixins(SmartObject, [Disponible,Activatable]);

let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);
function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtors => {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
}