const	ledger	=	{
merchant:	"PayBridge	Merchant-77",
feeRate:	0.02,
payments:	[	{	id:	"PAY-501",	amount:	4500	},	{	id:	"PAY-506",	amount:	6000	}	],
totalFees:	function	()	{
return	this.payments.reduce(function	(sum,	payment)	{
return	sum	+	payment.amount	*	this.feeRate;
},	0);
}
};
console.log(ledger.totalFees());
fetchPayments().then(ledger.totalFees);


