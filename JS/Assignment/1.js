var a=2101

var lastDigit=a%10
var rm =  a/10

if((lastDigit*2 - rm) % 7 ==0){
	
	console.log("Yes")
}
else 
	console.log("No")
