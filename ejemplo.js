var promise = new Promise(function (resolve, reject) {
    reject(new Error("Algo salio mal brou"));
});
promise.then(function (res) {
});
promise["catch"](function (err) {
    console.log('Tengo una llamada: ', err.message);
});
