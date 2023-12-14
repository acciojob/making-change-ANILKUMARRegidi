 const makeChange = (c) => {
  const myMoney = {
    penny: 0.01,
    nickel: 0.05,
    dime: 0.10,
    quarter: 0.25
  };

  let change = {
    q: 0,
    d: 0,
    n: 0,
    p: 1
  };

  c = parseInt(c)/100;
  
  while (c >= 0.01) {
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
  }
  
  return change;
}

// Example: Prompt the user to enter a value for 'c'
const userInput = prompt("Enter c: ");
const result = makeChange(userInput);
alert(JSON.stringify(result));
