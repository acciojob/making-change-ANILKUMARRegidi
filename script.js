const makeChange = (c) => {
 const myMoney =
	 { penny:'0.01';
       nickels:'0.05';
       dime:'0.10';
       quarter:'0.25';}
let change = 
	{
		p:0;
		n:0;
        d:0;
        q:0;
	}
    while(c>0)
		{
		  if(c>myMoney.quarter)
		  {
			  change.q++;
			  c -= myMoney.quarter;
		  }
			else if(c>myMoney.dime)
			{
				change.d++;
				c -= myMoney.dime;
			}
			else if(c>myMoney.nickels)
			{
				change.nickels++;
				c -= myMoney.nickels;
			}
			else
			{
				change.penny++;
				c -= myMoney.penny;
			}
		}
	return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
