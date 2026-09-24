


/*
It has given 
[ 5, NaN, 7, 5 ]
 it happens because here parseint takes two parameter oen is radix but map  has three paarmeters value ,index,array 
 so using arrow funstion &using NUMBER should solve the issue 



*/
const	instalments	=	["5",	"13",	"111",	"12"];
console.log(instalments.map(x=> parseInt(x)));


const	instalments	=	["5",	"13",	"111",	"12"];
console.log(instalments.map (x=> NUMBER(x)));


