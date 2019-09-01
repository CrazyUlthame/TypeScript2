var Calculo = /** @class */ (function () {
    function Calculo(x, y) {
        this.x = 0;
        this.y = 0;
        this.setX(x);
        this.setY(y);
    }
    Calculo.prototype.setX = function (x) {
        this.x = x;
    };
    Calculo.prototype.setY = function (y) {
        this.y = y;
    };
    Calculo.prototype.getX = function () {
        return this.x;
    };
    Calculo.prototype.getY = function () {
        return this.y;
    };
    Calculo.prototype.sumar = function () {
        return (this.getX() + this.getY());
    };
    Calculo.prototype.restar = function () {
        return (this.getX() - this.getY());
    };
    return Calculo;
}());
var calculo = new Calculo(30, 10);
console.log(calculo.restar());
