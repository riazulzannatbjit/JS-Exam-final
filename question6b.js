

/*
the second .then will not receive anything ,it will show error as there is no return  given 
inside {} return should be given 


*/

function	loadPaymentPage(paymentId)	{
fetchPayment(paymentId)
.then(payment	=>	{
return fetchPayer(payment.payerId);
})
.then(payer	=>	{
console.log("Payer:",	payer.name);
})
.catch(err	=>	console.log("Failed:",	err.message));
}
//the fix is using return type 





