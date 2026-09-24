const	charges	=	[20,	9,	100,	5];
console.log(charges.sort());
const	gatewayConfig	=	{	retries:	2	};
gatewayConfig.retries	=	4;			//X					

gatewayConfig	=	{	retries:	4	};		//Y	



/*

charges.sort()	log	[ 100, 20, 5, 9 ] because it does sort the array lexicographically not numerically that's why after 100 20 comes then 5 then 9
Here line line Y throws TypeError: Assignment to constant variable. so which means wecan;t reassign const variable . so here 
const protects data being changed . we can't reassign any value in const.


*/