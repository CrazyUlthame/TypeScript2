function iReturnPromiseAfter1Second() {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("hello world!"); }, 1000);
    });
}
Promise.resolve(123)
    .then(function (res) {
    return iReturnPromiseAfter1Second();
})
    .then(function (res) {
    console.log(res);
});
