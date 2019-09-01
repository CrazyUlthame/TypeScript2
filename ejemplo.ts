const promise = new Promise((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log('i get called: ', res === 123);    
});
promise.catch((err) => {

});