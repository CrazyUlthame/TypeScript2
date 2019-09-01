class Calculo{
    private x: number = 0;
    private y: number = 0;

    constructor (x: number, y :number){
        this.setX(x);
        this.setY(y);
    }

    public setX(x: number) : void{
        this.x = x;
    }

    public setY(y: number) : void{
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public sumar(): number {
        return (this.getX() + this.getY());
    }

    public restar(): number {
        return (this.getX() - this.getY());
    }
}

let calculo = new Calculo(30,10);
console.log(calculo.restar());