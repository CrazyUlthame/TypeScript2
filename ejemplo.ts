function PropertyDecorator(
    target: Object,
    PropertyKey: string | symbol
    ){
        console.log("PropertyDecorator called on: ", target, PropertyKey);
    }

    class PropertyDecoratorExample{
        @PropertyDecorator
        name: string;
    }
    