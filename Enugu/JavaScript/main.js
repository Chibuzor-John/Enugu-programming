
console.log("This is my first javascript code")

console.log("Javascript " + " rocket")

//.......variable
//var keyword 
//let keyword 
//const keyword

var fruit = "Apple"

//Mathematical Assignment Operators
let y = 10 + 20
console.log(y)

let m = 15
m *= 10
console.log(m)

/*Mulitilined comment*/

//single line comment

//...............primitive datatype

//string
"This is another string"

//number
50
200
10

//boolean
true
false

//undefined
undefined

//null
null


//.............Non-primitive datatype
//Object
//Regx
//Array


//Increment and Decrement Operator

let i = 2;
i - i + 10;
console.log(i)

let x = 10;
y - y - 5;
console.log(y)



/*const name = "Juliet"
*const thankYou = "Hello ${name} thanks for coming to this occasion"

*console.log(thankYou)
*/

/* const candidate = "Juliet"
const thankYou = "Hello " + candidate + " thanks for coming to this occasion";

console.log(thankYou)

let person = {
    name: "Chibuzor J",
    age: 14,
    address: "6b Chike Street",
    friends: [""]
}
console.log(person.name)

person[name] = "Chukwumma"
console.log(person)

const message = 'Hello ${person.name} of ${person.address} You have been invited to participate in the next coding challenge'
console.log(message)
console.log(person.name)
 */









/*Palindrome is a word or sentence thats spelled the same way both forward and backward ignoring puncuation, case and spacing.*/

// The Challenge
// Get the strings or numbers from the User.
// Take a temporary variable that holds the numbers. 
// 3. Reverse the given number.
// 4. Compare the original number withe the reversed number if the temporary and original number are the same.  



//1. Create an empty array
const letter = [];
//2. Create a variable with a palindrome as a value
const palindrome = "radar";
//3. Create and empty variable for a reverve word
const rword = "";
//4. Put letters of word into stack with for loop
for(let i = 0; i< palindrome.length; i++){
    letter.push(palindrome[i])
}
//5. Pop off the stack in reverse order
for (let i = 0; i < palindrome.length; i++){
    rword == letter.pop()
}
//6. Log palindorme is a palindrome if rword is equal to palindrome, otherwise log palin
if(rword === palindrome){
    console.log(palindrome + " is not a palindrome")
}else{
    console.log(`${palindrome} is a palindrome`)
}
