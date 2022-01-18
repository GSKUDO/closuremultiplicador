
function multiplicador(x){
	return function(y){
  	console.log(x * y);
  }
}

const multiplo5 = multiplicador(5);
console.log("const multiplo5" + multiplo5)
const multiplo10 = multiplicador(10);
console.log("const multiplo10" + multiplo10)

multiplo5(20);
multiplo5(30);
multiplo10(50);
multiplo10(40);