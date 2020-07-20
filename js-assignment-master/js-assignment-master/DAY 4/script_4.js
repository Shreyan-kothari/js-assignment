// Make a Calculator in Javascript which can do operations as Addtion, Subtraction, Multiplication, Division,
// Square root, Percentage.

let str = prompt("Enter two numbers:");
str = str.split(" ");
const a = Number(str[0]);
const b = Number(str[1]);
// console.log(+a, +b);
// console.log(typeof a, typeof b);


let ch = prompt(`Choose one option:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Square Root
    6. Power
    7. Modulus`);
// console.log(ch);

switch (ch)
{
    case '1':
        console.log(`${a} + ${b} = ${a+b}`);
        break;
    case '2':
        console.log(`${a} - ${b} = ${a-b}`);
        break;
    case '3':
        console.log(`${a} * ${b} = ${a*b}`);
        break;
    case '4':
        console.log(`${a} / ${b} = ${a/b}`);
        break;
    case '5':
        console.log(`SquareRoot(${a}) = ${Math.sqrt(a)}`);
        console.log(`SquareRoot(${b}) = ${Math.sqrt(b)}`);
        break;
    case '6':
        console.log(`${a} ^ ${b} = ${Math.pow(a, b)}`);
        break;
    case '7':
        console.log(`${a} % ${b} = ${a%b}`);
        break;
    default:
        console.log("Invalid option");
         break;
}


