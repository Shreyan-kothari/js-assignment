let num = Number(prompt("Enter a number. "));

function evenOdd(x)
{
    if (x % 2 === 0)
        return "even";
    else
        return "odd";
}

let ans = evenOdd(num);

console.log(`The number entered is ${num} and it is ${ans}.`);
