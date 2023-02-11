function  myAsyncFunction(name){

    var promise = new Promise(function(resolve1,reject1){
        if(name == "sudha"){
            resolve1("promise resolved");
        }
        else{
            reject1("promise rejected");
        }
    })
    return promise;
}

function resolvepromise(data){
    console.log(data);
}
function rejectpromise(data){
    console.log(data);
}

// first way
myAsyncFunction("sudha").then(resolvepromise);

//second way

myAsyncFunction("sudha1").then(function(data){
    console.log(data);
}).catch(function(data){
    console.log(data);
});

// other way

myAsyncFunction("sudha1").then(resolvepromise, rejectpromise);


//with arrow function

myAsyncFunction("sudha").then(
    data => console.log(data),
    error => console.log(error)
);


myAsyncFunction("Sudha").then(data => console.log(data)).catch(data=> console.log(data));
