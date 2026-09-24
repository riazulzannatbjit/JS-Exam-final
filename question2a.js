const	paymentSnapshot	=	{
paymentId:	"PAY-9001",
capturedAt:	new	Date("2026-05-18T14:45:00Z"),
payer:	{	name:	"Imran",	billing:	{	city:	"Dhaka",	zone:	"Gulshan"	}	},
fees:	[	{	type:	"GATEWAY",	charge:	90	},	{	type:	"SERVICE",	charge:	60	}	]
};
const	draft	=	{	...paymentSnapshot	};
draft.paymentId	=	"PAY-9001-DRAFT";
draft.payer.billing.city	=	"Rajshahi";
draft.fees.push({	type:	"FX",	charge:	45	});
console.log(paymentSnapshot.paymentId);
console.log(paymentSnapshot.payer.billing.city);
console.log(paymentSnapshot.fees.length);


/*

values are 
PAY-9001
Rajshahi
3

here for paymentId the output was  the original one beacuase in shallow copy paymnetSnapshot here using spread operator works in
top level that's why the original paymentId was not changed . but it changes the values of original inside the array & nested properties which is behavior of shallow copy
&that's what happens here  the prayer.billing.city of original record was changed


*/