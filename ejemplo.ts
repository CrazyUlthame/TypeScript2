function loadIten(id: number) : Promise<{id: number}>{
    return new Promise ((resolve) => {
        console.log('loading item', id);
        setTimeout(() => {
            resolve({ id: id});
        }, 1000);
    });
}

let item1, item2;
loadIten(1)
    .then((res) => {
        item1 = res;
        return loadIten(2);
    })
    .then((res) => {
        item2 = res;
        console.log('done');
    });

    Promise.all([loadIten(1),loadIten(2)])
        .then((res) => {
            [item1,item2] = res;
            console.log('done')
        });