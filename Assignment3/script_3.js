let ans = prompt("Are you 21+ years old? (Enter Y or N)");

if (ans.toUpperCase() === 'Y')
{
    console.log("Can drink.");
}

else if (ans.toUpperCase === 'N')
{
    console.log("Cannot drink.");
}

else{
    console.log("Invalid answer.");
}