console.log(typeof	settlePayment);
console.log(typeof	buildStatement);
console.log(retryWindow);
console.log(typeof	FEE_RATE);
var	retryWindow	=	15;
const	FEE_RATE	=	0.02;
function	settlePayment(payment)	{
return	payment.id;
}
var	buildStatement	=	function	(payment)	{
return	{	id:	payment.id,	rate:	FEE_RATE	};
};



   /*
a) function 
  undefined
   undefined
Here settlePayment  is giving the output of function & for buildStatement & FEE_RATE shows undefined behavior at line 2 & 3 
Here  settlePayment is function which can be called beofore their defination ,buildStatement is decalared  using var which shows undefined behavior 
if called before their initialization ,  FEE_RATE is const so when we wanted to do console.log(typeof	FEE_RATE) it shows undefined as it's initialization 
was done at line 6 later .


   */
