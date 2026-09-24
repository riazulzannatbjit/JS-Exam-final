/*array.filter(Boolean) removes all flase values from an array so that if we use that  it will remove o,-0 ,null,"",NAN
{
id:	"PAY-501",
status:	"SETTLED",
payer:	{	name:	"Imran	Chowdhury",	contact:	{	phone:	"01511000001",	email:	"imran@mail.com"	}	},
gateway:	{	name:	"bKash",	channel:	"WALLET"	},
amount:	o,
cashback:	{	code:	"FIRST",	value:	0	},
fees:	[	{	type:	"GATEWAY",	charge:	0	},	{	type:	"SERVICE",	charge:	60	}	],
adjustment:	0
},


Here suppose we use array.filter(boolean) it will remove the amount which is 0  ,so 	it	would	silently	delete	valid	business	data.
so teh record  of amount or how any spent will be gone also 



*/