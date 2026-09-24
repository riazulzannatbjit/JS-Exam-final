async	function	loadAll(ids)	{
const	payments	=	[];
for	(const	id	of	ids)	{
setTimeout(()	=>	{
payments.push(Promise.resolve().then(()	=> fetchPayment(id));	//	each	call	takes	~300ms
},300);
return	payments;
}
}
/*
Slow sequential version is  correct choice when delaing with small data 


*/