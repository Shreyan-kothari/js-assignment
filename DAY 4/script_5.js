// You are managing a sales department for your company, you want to reward your employees based on
// the sales made by them during the year.
// The criteria is as follows:
// 1. Sales from 0-5000 : 2%
// 2. Sales from 5001 - 10000 : 5%
// 3. Sales from 10001 - 20000 : 7%
// 4. Above 20000 - 10%
// Then log the total commission earned by him.

let sales = Number(prompt("Enter the sales made during the year."));
let comm;

if (sales > 20000)
    comm = 10;
else if (sales > 10000)
    comm = 7;
else if (sales > 5000)
    comm = 5;
else if (sales > 0)
    comm = 2;

let amt = (comm/100) * sales;
console.log(`Sales: ${sales}, Commission Amount: ${amt}`);