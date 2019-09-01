function* generator() {
    console.log('Execution started');
    yield 0;
    console.log('execution resumed');
    yield 1;
    console.log('execution resumed');
}

var iterator = generator();
console.log('Starting iteration');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
