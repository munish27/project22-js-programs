var a = 5;
var b = 6;
// var result;
if(a==b){
    // result = (a+b)*3;
    document.getElementById("sum").innerHTML = (a+b)*3;
    
    console.log((a+b)*3);
}else{
    // result = a+b;
    document.getElementById("sum").innerHTML = a+b;
    console.log(a+b);
}