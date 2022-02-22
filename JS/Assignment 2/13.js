
var i=153
x=i
var r=0
var sum=0
while(i>0){
    r=i%10
    sum=sum+r**3
    i=Math.floor(i/10)
    
}
if(sum===x){
    console.log("Armstrong Number");
}
else{
    console.log("Not a Armstrong Number");
}