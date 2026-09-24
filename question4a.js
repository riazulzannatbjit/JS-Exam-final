


/*
for first thing inside a block there should be areturn type but here no return type is given for first fuction
so it will give error
for 2nd function also we have to give return type it is inside a {}
*/
const	getPaymentIds	=	(payments)	=>	{
return payments.map(pay	=>	{	pay.id	});
};//we need to give return type here



const	getPaymentCards	=	(payments)	=>	payments.map(pay	=>	{	
   return { id:	pay.id,
    	net: 0	}
   }
    );
