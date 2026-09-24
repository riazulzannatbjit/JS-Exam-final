/*
for const	cashbackA	=	pay.cashback.value	||	200;
const	cashbackB	=	pay.cashback.value	??	200; 

 ?? using thsi is correct fro a money field because it picks RHS only if the lHS is null/undefined  ,
 but for || it choose  RHS for any false values , 
 choosing ?? is correct as  here 0 is valid number

*/