class Adder {
    add = (b: string): string => {
        return this.a + b;
    }
    a: string;
}

class ExtendedAdder extends Adder {
    private superAdd = this.add;
    add = (b: string): string => {
        return this.superAdd(b);
    }
}