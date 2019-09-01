var Disponible = /** @class */ (function () {
    function Disponible() {
    }
    Disponible.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disponible;
}());
var Activatable = /** @class */ (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.desctivate = function () {
        this.isActive = false;
    };
    return Activatable;
}());
var SmartObject = /** @class */ (function () {
    function SmartObject() {
        var _this = this;
        this.isDisposed = false;
        this.isActive = true;
        setInterval(function () { return console.log(_this.isActive + " : " + _this.isDisposed); }, 500);
    }
    SmartObject.prototype.interact = function () {
        this.activate();
    };
    return SmartObject;
}());
applyMixins(SmartObject, [Disponible, Activatable]);
var smartObj = new SmartObject();
setTimeout(function () { return smartObj.interact(); }, 1000);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtors) {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
}
