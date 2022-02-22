var a =[1500,1700,2500]

var temp,i,j;

for(i=0;i<3;i++){
	for(j=i+1;j<3;j++){
		
		if(a[i]<a[j]){
			temp=a[i]
			a[i]=a[j]
			a[j]=temp
			
		}
	}	
	
}

console.log(a)