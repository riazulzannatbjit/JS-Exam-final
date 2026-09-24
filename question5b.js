const	rawPayments	=	[
{
id:	"PAY-501",
status:	"SETTLED",
payer:	{	name:	"Imran	Chowdhury",	contact:	{	phone:	"01511000001",	email:	"imran@mail.com"	}	},
gateway:	{	name:	"bKash",	channel:	"WALLET"	},
amount:	4500,
cashback:	{	code:	"FIRST",	value:	0	},
fees:	[	{	type:	"GATEWAY",	charge:	90	},	{	type:	"SERVICE",	charge:	60	}	],
adjustment:	0
},
{
id:	"PAY-502",
status:	"PENDING",
payer:	{	name:	""	},
gateway:	{	name:	"Nagad",	channel:	"WALLET"	},
amount:	2000,
cashback:	null,
fees:	[	{	type:	"GATEWAY",	charge:	40	}	],
adjustment:	250
},
null,
{
id:	"PAY-504",
status:	"SETTLED",
payer:	null,
gateway:	{	name:	"Nagad",	channel:	"WALLET"	},
amount:	1200,
cashback:	{	code:	"",	value:	1500	},
fees:	[],
adjustment:	null
},
{
id:	"PAY-505",
status:	"FAILED",
payer:	{	name:	"Nusaiba	Karim",	contact:	{	phone:	null	}	},
gateway:	{	name:	"Card",	channel:	"VISA"	},
amount:	8000,
fees:	[	{	type:	"GATEWAY",	charge:	200	}	]
},
{
id:	"PAY-506",
status:	"SETTLED",
payer:	{	name:	"Rezaul	Karim",	contact:	{	phone:	"01511000003"	}	},
gateway:	{	name:	"bKash",	channel:	"WALLET"	},
amount:	6000,
cashback:	{	code:	"EID",	value:	300	},
fees:	[	{	type:	"GATEWAY",	charge:	120	},	{	type:	"SERVICE",	charge:	80	}	],
adjustment:	250
}
];








console.log([].every(p	=>	p.status	===	"SETTLED"));
console.log(rawPayments.find(p	=>	p?.id	===	"PAY-999").status);

/*
true//1stone

                                                                  ^

TypeError: Cannot read properties of undefined (reading 'status')//2none


*/