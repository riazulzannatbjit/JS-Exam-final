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

//Rewrite

rawPayments.forEach(pay	=>	{
    if(pay.payer.contact.phone!= null){
    return console.log(pay.payer.contact.phone);
    }
    else{
        console.log("n/A");
    }
   
}
);

/*
First entry is 
01511000001 
the error message is TypeError: Cannot read properties of undefined (reading 'phone')

D:\Javascript-Exam\question3a.js:52
rawPayments.forEach(pay =>      console.log(pay.payer.contact.phone));
                                                              ^

TypeError: Cannot read properties of undefined (reading 'phone')
    at D:\Javascript-Exam\question3a.js:52:58
    at Array.forEach (<anonymous>)
    at Object.<anonymous> (D:\Javascript-Exam\question3a.js:52:13)
    at Module._compile (node:internal/modules/cjs/loader:1929:14)
    at Object..js (node:internal/modules/cjs/loader:2060:10)
    at Module.load (node:internal/modules/cjs/loader:1651:32)
    at Module._load (node:internal/modules/cjs/loader:1443:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

*/