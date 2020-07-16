// ----------------------- STRING METHODS -----------------------

// search() -> search for a string and return the index of first occurrence
// let text = "Roses are red, violets are blue.";
// console.log(text.search("are"));

// slice(start, end) -> extract a part of a string, can accept negative indexes too. 'end' index is not included 
// let str = "programming";
// console.log(str.slice(3, 9));
// console.log(str.slice(-1));   

// substring(start, end) -> works same as slice()
// let str = "programming";
// console.log(str.substring(3, 9));

// substr(start, length) -> returns substring which begins from 'start' index and contains 'length' characters
// let str = "abcdef";
// console.log(str.substr(1, 3));
// console.log(str.substr(4));
// console.log(str.substr(-5));

// replace() -> to replace a specified value with another, and returns the new string
// let str = "Apple Banana Orange";
// console.log(str.replace("Banana", "Strawberry"));

// concat() -> concatenate two strings 
// let str1 = "pyt";
// let str2 = "hon";
// console.log(str1.concat(str2));

// trim() -> remove spaces from both sides of the string
// let str = "       Hello, World      ";
// console.log(str.trim());

// charCodeAt() -> returns unicode of the character at specified index
// let str = "apple";
// console.log(str.charCodeAt(0));

// ----------------------- ARRAY METHODS -----------------------

// toString() -> converts an array to a string of comma separated values
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.toString());

// join() -> converts array to a string separated by the specified character
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.join(' - '));

// splice() > used to add elements in array. it takes three parameters. 1st : where to add, 2nd : how many to be removed, 3rd : what to add (can be more than one)
// let arr = ["a", "c", "d", "e"];
// arr.splice(1, 3, "ball", "cat", "dog");
// console.log(arr);

// slice() -> extract elements from array
let fruits = ["apple", "mango", "banana", "grapes"];
console.log(fruits.slice(1, 3));
