console.log("one:	sync");
setTimeout(()	=>	{
console.log("two:	timeout	0");
Promise.resolve().then(()	=>	console.log("three:	microtask	inside	timeout"));
},	0);
Promise.resolve().then(()	=>	console.log("four:	then"));
(async	()	=>	{
console.log("five:	async	body");
await	null;
console.log("six:	after	await");
})();
console.log("seven:	sync	end");


/*
one:    sync
five:   async   body
seven:  sync    end
four:   then
six:    after   await
two:    timeout 0
three:  microtask       inside  timeout


here first syncronus task are getting done such one,five, then the asynchronus task are done , which is promisse & it is microtask &then 
settimeout macrotask is happened . here eventloop checked when the call stack will be  empty ,s first call stack then  done the synchronus 
tasks  then in the queue get happens 
 inside timeout microtask happens after all asynchronus happens as it is macrotask . 
 call stack-web api-  call queue - happens event loop monitors that 



*/