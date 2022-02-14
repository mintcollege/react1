import {camelCase, snakeCase} from "change-case";


// let name = 'robert'
// let age = 5         // number
// let total = 99.9    // number
// console.log(name)        // 'number'
// name = 'jim'
// console.log(name)

// let address = '#12 Sunset Drv.'
// console.log(address)
// address = '#13 Edsa Ave.'
// console.log(address)

// const isPaid = true       // boolean
// const numberlist = [1, 2, 3]
// const userdata = {
//     id: 1234,
//     grade: 4,
//     isPaid: true,
//     classes: ['math', 'science', 'etc.'],
//     data: {
//         a: 1,
//         b: 2,
//         c: 3
//     }
// }       // object
//
// console.log(userdata.data.a)


// function addme() {
//     return 1 + 2
// }
// const addme = () => {
//     return 1 + 2
// }
// // console.log(addme())
//
// const addnumbers = num1 => num1 + 2
// console.log(addnumbers(4, 6, 9, 12, 3 ,0, 25))

// def addnumbers(*args):
//     print(args)

const finalMessage = () => {
    console.log('Hey no I am the last message')
}

// // // callback function
// const showMessage = (mycallback) => {
//     console.log('hello')
//     console.log('world')
//     console.log('This is the last line.')
//     mycallback()
// }
// const aaa = showMessage     // pass by reference
// console.log(aaa())
//
// const fruit = 'apple'
// const anotherfruit = fruit
// console.log(anotherfruit)

setTimeout(() => {
    console.log('Hey no I am the last message')
}, 5000)

// const numbers = [4, 7, 2, 9]
// const newnumbers = [...numbers]     // rest operator
// console.log(numbers)

// const user = {
//     name: 'jeff',
//     age: 18,
//     gender: 'male',
//     course: 'CSIT',
// }
// // console.log(user)
// const {name} = user        // deconstruction
// console.log(name)

// hello world, helloWorld
console.log(camelCase('hello world'))
console.log(snakeCase('hello world'))