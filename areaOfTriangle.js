var a = 4;
var b = 4;
var c = 5;

var s = (a+b+c)/2;

var area = parseInt(Math.sqrt(s*((s-a)*(s-b)*(s-c))));

document.getElementById("triangle").innerHTML = area;
