// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.



// describe("personReturned", () => {
//   it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
//     // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

//     expect(personReturned(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//   })
// })

// ● personReturned › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

// ReferenceError: personReturned is not defined


// b) Create the function that makes the test pass.

//Create a function called personReturned
//Take in the keys from the objects and returns the values 
//Returns a string with the inputted data

// const personReturned = (array) => {
//   let name1 = array.map(value => value.name)
//   let occupation1 = array.map(value => value.occupation)
//   return array.map(value => value === "${name1} is a ${occupation1}")
// }

const personReturned = (array) =>{
  for(let i = 0; i < array.length; i++){
  let name = array[i].name
  let occupation = array[i].occupation
  return `${name} is ${occupation}`
  }
}

// // array[i].name[0].toUpperCase() + array[i].name.substring(1)


// const personReturned = (array) =>{
//   for(let i = 0; i < array.length; i++){
//   let name = array.map(value => value.name)
//   let occupation = array.map(value => value.occupation)
//   return `${name} is a ${occupation}`
//   }
// }

console.log(personReturned(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


// describe("remainders", () => {
//   it("akes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
//     const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//     // Expected output: [ 2, 0, -1, 0 ]
//     const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//     // Expected output: [ 2, 1, -1 ]
//     expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0])
//     expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
//   })
// })

// ● remainders › akes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// ReferenceError: remainders is not defined

// b) Create the function that makes the test pass.

//Create a function - remainders 
//Parameter - array 
//Filter through the method to address only numbers
//Divide those numbers 

// const remainders = (array) => {
//   let number = array.filter(value => typeof value === "number")
//   return number.map(value => value % 3)
// }

// PASS  ./code-challenges.test.js
// remainders
//   ✓ akes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


// describe("numbersCubed", () => {
//   it("that takes in an array of numbers and returns the sum of all the numbers cubed", () => {
//     const cubeAndSum1 = [2, 3, 4]
//       // Expected output: 99
//     const cubeAndSum2 = [0, 5, 10]
//       // Expected output: 1125
//     expect(numbersCubed(cubeAndSum1)).toEqual(99)
//     expect(numbersCubed(cubeAndSum2)).toEqual(1125)
//   })
// })

// ● numbersCubed › that takes in an array of numbers and returns the sum of all the numbers cubed

// ReferenceError: numbersCubed is not defined

// b) Create the function that makes the test pass.

//Create a function - numbersCubed
//Parameter - array 
//Use the .map() method to address each index
//Have the value of each index cubed
//Take the sum of the array with the reduce method to 
//Return the sum of the array

// const numbersCubed = (array) => {
//   let sum = math.sum(array) 
//   return sum
// }

// const numbersCubed = (array) => {
//   let cubed = array.map(value => value **3)
//   return cubed.reduce( (a, b) =>  a + b, 0)
// }

// PASS  ./code-challenges.test.js
// numbersCubed
//   ✓ that takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total