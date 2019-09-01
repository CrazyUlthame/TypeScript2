const promise = new Promise((resolve, reject) => {
    reject(new Error("Algo salio mal brou"));
});
promise.then((res) => {
        
});
promise.catch((err) => {
    console.log('Tengo una llamada: ', err.message);
});