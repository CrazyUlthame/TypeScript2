loadJSONAsync('good.json')
    .then(function(val) { console.log(val);})
    .catch(function(err){
        console.log('goodjson error', err.message);
    })

    .then(function () {
        return loadJSONAsync('absent.json');
    })
    .then(function(val) { console.log(val);})
    .catch(function (err) {
        console.log('absent.json error', err.message);
    })

    .then(function (){
        return loadJSONAsync('bad.json');
    })
    .then( function ( val) {console.log(val);}
    .catch(function (err){
        console.log('bad.json error', err.message);
    });