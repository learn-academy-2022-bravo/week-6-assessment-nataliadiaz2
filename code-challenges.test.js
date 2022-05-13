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

describe("personReturned", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    expect(personReturned(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ● personReturned › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

// ReferenceError: personReturned is not defined

// b) Create the function that makes the test pass.

//Create a function called personReturned
//Parameter - array that contains objects
//Utilize the .map() method to go through the entire array
//Create a new variable to use .split() method on the name on spaces
//Create a new variable to hold the change of the first and last name
//Use the .toUpperCase() method to capitilize and use substring to keep the rest of the name as it is which is lowercase
//Do this twice to the first name then the last name, and them together and create a space in between
//Return the changed first and last name and the occupation in a string interpolation

const personReturned = (array) =>{
   return array.map((value) => {
     let separateArray = value.name.split(' ')
     let upperCaseName = separateArray[0][0].toUpperCase() + separateArray[0].substring(1) + " " + separateArray[1][0].toUpperCase() + separateArray[1].substring(1)
     return `${upperCaseName} is ${value.occupation}.`  
    })
}

// PASS  ./code-challenges.test.js
// personReturned
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0])
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// ● remainders › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// ReferenceError: remainders is not defined

// b) Create the function that makes the test pass.

//Create a function - remainders 
//Parameter - array 
//Use .filter() method to filter through the method to address only numbers
//Return the filtered array, then map through the new array
//Divide each index of the new array by 3, return the remainder of each number

const remainders = (array) => {
  let number = array.filter(value => typeof value === "number")
  return number.map(value => value % 3)
}

// PASS  ./code-challenges.test.js
// remainders
//   ✓ akes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("numbersCubed", () => {
  it("that takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
      // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
      // Expected output: 1125
    expect(numbersCubed(cubeAndSum1)).toEqual(99)
    expect(numbersCubed(cubeAndSum2)).toEqual(1125)
  })
})

// ● numbersCubed › that takes in an array of numbers and returns the sum of all the numbers cubed

// ReferenceError: numbersCubed is not defined

// b) Create the function that makes the test pass.

//Create a function - numbersCubed
//Parameter - array 
//Use the .map() method to address each index
//Have the value of each index cubed
//Take the sum of the array with the reduce method to add each index with the next and return the sum
//Return the sum of the array

const numbersCubed = (array) => {
  let cubed = array.map(value => value **3)
  return cubed.reduce( (a, b) =>  a + b, 0)
}

// PASS  ./code-challenges.test.js
// numbersCubed
//   ✓ that takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total