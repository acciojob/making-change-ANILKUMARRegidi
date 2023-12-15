 const makeChange = (c) => {
  const myMoney = {
    penny: 1,
    nickel: 5,
    dime: 10,
    quarter:25
  };

  let change = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  
  
  while (c >0) {
    if (c >= myMoney.quarter) {
      change.q++;
      c -= myMoney.quarter;
    } else if (c >= myMoney.dime) {
      change.d++;
      c -= myMoney.dime;
    } else if (c >= myMoney.nickel) {
      change.n++;
      c -= myMoney.nickel;
    } else if (c >= myMoney.penny) {
      change.p++;
      c -= myMoney.penny;
    }
	  else {
		  break;
	  }
  }
  
  return change;
}

// Example: Prompt the user to enter a value for 'c'
const userInput = prompt("Enter c: ");
const result = makeChange(userInput);
alert(JSON.stringify(result));
