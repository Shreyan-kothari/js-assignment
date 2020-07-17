let marks = Number(prompt("Enter your marks."));
let grade;

// ------------------ Using conditional statements ------------------

// if (marks >= 75)
//     grade = "A";
// else if (marks >= 50)
//     grade = "B";
// else if (marks >= 25)
//     grade = "C";
// else
//     grade = "D";
    
// console.log(`Marks are ${marks} and grade is ${grade}`);



// --------------------------- Using switch -------------------------

switch(marks >= 75)
{
    case true:
        grade = "A";
        break;
    case false:
        switch(marks >= 50)
        {
            case true:
                grade = "B";
                break;
            case false:
                switch(marks >= 25)
                {
                    case true:
                        grade = "C";
                        break;
                    case false:
                        grade = "D";
                        break;
                }
        }
}

console.log(`Marks are ${marks} and grade is ${grade}`);



// ---------------------- Using ternary operator ----------------------

// grade = (marks >= 75 ? "A" : (marks >= 50 ? "B" : (marks >= 25 ? "C" : "D")));

// console.log(`Marks are ${marks} and grade is ${grade}`);
