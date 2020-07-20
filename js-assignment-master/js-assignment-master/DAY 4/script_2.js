// Destructure the following object:

const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
};


// Destructuring the object
const {name, age, projects:{diceGame}} = student;
console.log(`Name: ${name}, Age: ${age}, Projects: ${diceGame}`);
