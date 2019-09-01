function iReturnPromiseAfter1Second():Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve ("hello world!"), 1000);
    });
}

Promise.resolve(123)
    .then((res) => {
        return iReturnPromiseAfter1Second();
    })
    .then((res) => {
        console.log(res);
    });