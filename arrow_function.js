const addTwonum = function(num1 , num2){
    return num1 + num2 ;
}
var result = addTwonum(2,3);
console.log(result);

const sqr = function(num){
    return num*num;
}
//const sqr = num => num*num;
var res = sqr(2);
console.log(res);

console.log(sqr(2));

const print = () => "hi";

var obj = {
    id:20,

    counter:function(){
        setTimeout(function(){
            this.id++;
            console.log(this.id);
        }.bind(this),1000)
    }
}
obj.counter();