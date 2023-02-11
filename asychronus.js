var getTodo = function(){
    //simulate sserver responce delay
    setTimeout(function() {
        console.log("first statement");
        console.log("second statement");
    },2000);

    console.log("after setTiomeout");

    setTimeout(function (){
        console.log("second delay");
    },1000);
}
getTodo();

/*without callback

var getTodo1 = function(){
    //simulation server respponce delay

    setTimeout(function(){
        return{text:"Server responce"};
        
    },1000);
}

var data = getTodo1();
console.log(data.text);   */

//with callback

var getTodo2 = function(callback)
{
    setTimeout(function(){
        callback({text: "server responce"});
    })
};
function printData(data){
    console.log(data.text);
}
//first way 
//getTodo2(printData);

//second way
getTodo2(function(data){       //anonymus function without name
    console.log(data.text);
});



//CSV -comma seperated values "sudha,101,"IT";

//XML document 
//<name>sudha</name> 
//<empid>IT</empid>

//JSON = JavaScript Object Notation
//emp1 = }{name: "sudha",empid:101,dept:"IT"};
//emp2 = {name: "sana",empid:102,dept:"Finance"};

//[emp1,emp2]; //or    //array

//[
//    {name: "sudha",empid:101,dept:"IT"},
//    {name: "sana",empid:102,dept:"Finance"}
//]