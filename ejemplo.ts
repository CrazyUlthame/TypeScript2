function ParameterDecorator(
    target: Function,
    propertyKey: string | symbol,
    parameterIndex: number
){
    console.log("ParameterDecorator called on: ", target, propertyKey, parameterIndex);
}

class StaticMethodDecoratorExample{   
    method(@ParameterDecorator param1: string, @ParameterDecorator param2: number){
        
    }
}