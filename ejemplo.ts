const {called} = new class{
    count = 0;
    called = () =>{
        this.count++;
        console.log(`called: ${this.count}`);
    }
};

called();
called();