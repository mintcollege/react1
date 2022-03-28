

// This is a comment
// You can type anything here
// Another comment line here
// Single-line comment

/*
* Anything in here is a comment
* This is a multiline comment
* Use this if you need to explain and need
* more space to do so.
*
* */

/*
* Topics:
* 1. Variables
* 2. Functions and Scope
* 3. Callbacks
* 4. Conditionals
* */

let userName = 'Jeff'           // string
let email = 'jeff@gmail.com'    // string
let my_fullname = 'Jeff Bezos'  // camelcase writing
let password1 = 'pass123'       // string
let password2 = 'pass345'       // string

let userAge = 19                // number
let total = 99.50               // number

let is_paid = true              // boolean
let is_rich = false             // boolean

let students = ['Jeff', 'Maria', 'Matthew', 'James']    // array
let products = ['Rubber Duck', 'Nike Shoes']            // array
let members = []                                        // empty array
let grades = [95, 80, 87, 92.5]                         // array
let mixedData = ['hello', 12, true]

let userInfo = {
    name: 'Jeff',
    age: 19,
    country: 'PH',
    paid: true,
    id: 1243432,
    bought: ['Item 1', 'Item 2'],
    favColor: 'red',
    message: 'hello',
    score: 12,
    has_car: true,
} // object

let registeredUsers = [
    {
        name: 'Sara',
        occupation: 'Dentist',
        age: 42,
    },
    {
        name: 'Mike',
        occupation: 'Fireman',
        age: 34
    },
    {
        name: 'Theo',
        occupation: 'Programmer',
        age: 24,
    },
]

// console.log(userName)
// console.log(email)
// console.log(students)
// console.log(userInfo)

// let userScore = '57'
// console.log(userScore + 1)

// let firstname = 'Samantha'
// let lastname = 'Santos'
// let score = 23
// console.log(firstname + ' ' + lastname + score + 12 + 11 + 33)

// const tvshow = 'Hawkeye'      // Constant variable: cannot be changed
// console.log(tvshow)
// tvshow = 'Loki'               // This will be an error
// console.log(tvshow)

// const last_index = students.length - 1      // 3
// console.log(students[last_index])
// console.log(students[students.length - 1])

// console.log(students)
students.push('Ducky')
// console.log(students)


// Sample store
let store = []
console.log(store)
// Add to cart
store.push({
    name: 'Red Tumbler',
    cost: 900
})
console.log(store)
// Added another product
store.push({
    name: 'Realme 8',
    price: 20000
})
console.log(store)

store.push({
    name: 'Sharpee',
    price: 25.95
})
console.log(store)

delete store[1]
console.log(store)