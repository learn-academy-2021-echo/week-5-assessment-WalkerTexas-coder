// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { expect } = require("@jest/globals")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
// describe("",()=>{
//     it("",()=>{
//         expect().toEqual()
//     })
// })

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codedMessage", () => {
  it("a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});
//
// b) Create the function that makes the test pass.
// create an array from the string we pass in
// in the array check each char and see if it matches the coded char, 
// if so replace it
// afterwards we want to convert the array back into a string and return it.

const codedMessage = (string) => {
    let codeKeys ={a:4, e:3, i:1, o: 0} 
    return string
      .split("")
      .map((value) =>
        codeKeys.hasOwnProperty(value.toLowerCase())
          ? codeKeys[value.toLowerCase()]
          : value
      )
      .join("");     
}



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("wordReturn",()=>{
    it("a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
      expect(wordReturn(arrayOfWords1, letterA)).toEqual([
        "Apple",
        "Banana",
        "Orange",
      ]);
      expect(wordReturn(arrayOfWords2, letterE)).toEqual([
        "Cherry",
        "Blueberry",
        "Peach",
      ]);
    });
})

// b) Create the function that makes the test pass.
// Seperate string into array
// search the array for the letter
// if letter is in array 
// push baby push array inot new array

const wordReturn = (string, letter) => {
    let newArray = []
    string.map(value => {
        if (value.includes(letter) || value.includes(letter.toUpperCase())) {
            newArray.push(value)
        }
    })
    return newArray
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouseOrNot",()=>{
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
      expect(fullHouseOrNot(hand1)).toEqual(true);
      expect(fullHouseOrNot(hand2)).toEqual(false);
      expect(fullHouseOrNot(hand3)).toEqual(false);
    });
})


// b) Create the function that makes the test pass.
// takes ina arry of numbers
// check if only two different kinds of numbers in array
// use set to remove duplicates
// check length- want to see 2 numbers
// check one number if it is repeated 2 times or three times
// return true if not

const fullHouseOrNot = (array) => {
    let occurances = 0
    if ([...new Set(array)].length === 2 && array.length === 5) {
        array.forEach(num => {
            array[0]=== num ? occurances += 1 : occurances 
        })
    return occurances === 2 || occurances === 3
    } else {
        return false
    }
} 