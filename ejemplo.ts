function* generator() {
    var bar = yield 'console log';
    console.log(bar);
    yield 1;
}

const iterator = generator()
const foo = iterator.next();
console.log(foo.value);
const nextThing = iterator.next('un texto x we');
console.log(nextThing);

