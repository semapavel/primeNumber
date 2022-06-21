let num = prompt("введите число", '');
primeNum:
for (i=2; i<=num;i++){
	for(j=2;j<=Math.sqrt(i);j++){
		if(i%j==0) continue primeNum;
	}
	alert(i);
}
