
var n=6
var a=0,b=1
var i=0
c=0
if(n===0)
console.log(0);
else{
    while(i<n-2)
    {
    c=b
    b=a+b
    a=c
    i++
    }
    console.log(b);
}
