function	getTopThreeFees(fees)	{
return	fees.sort((a,	b)	=>	b.charge	-	a.charge).slice(0,	3);
}


/*
Here we have used .sort method that changes the original order also like do mutation to solve this we can use tosorted .another one si using shallow copy 
so that original order stay protected.





*/
function	getTopThreeFees(fees)	{
return	fees.tosorted((a,	b)	=>	b.charge	-	a.charge).slice(0,	3);//using tosorted method
}


