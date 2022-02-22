
var i=679
var r=0
var sum=0
while(i>0){
    r=i%10
    sum=sum*10+r
    i=Math.floor(i/10)
}
console.log(sum);