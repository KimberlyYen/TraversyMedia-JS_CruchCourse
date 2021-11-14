// const fruit = ["Apple" , "orange" , "pears"]

// fruit[3] = "Candy"

// fruit.push('mangos')

// fruit.unshift('stwaberry')

// fruit.shift()

// fruit.pop()

// console.log(fruit)

// console.log(Array.isArray('hello'))

// console.log(fruit.indexOf('orange'))

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: '30',
//     hobbies : ['music', 'movies', 'sports'],
//     address:{
//         street: '50 main st',
//         city: 'Bosten',
//         state: 'MA'
//     }
// }
// person.email = 'john@gmail.com'
// console.log(person.email)

// const todos =[
//     {
//         id:1,
//         text: 'Take out the trash',
//         iscompleted: true,
//     },
//     {
//         id:2,
//         text: 'Meeting with boss',
//         iscompleted: true,
//     },
//     {
//         id:3,
//         text:'Dentist',
//         iscompleted: false,
//     }
// ]

//ForEach, Map , filter
// todos.forEach(function(todos){
//     console.log(todos.text)
// })

//Map
// const todoText  = todos.map(function(todo) {
//     return todo.text;
// })
// console.log(todoText)

//filter
// const todoCompleted  = todos.filter(function(todo) {
//     return todo.iscompleted === true;
// }).map(function(todo){
//     return todo.text
// })

// console.log(todoCompleted)


//More Readable 
// for(let todo of todos){
//     console.log(todo.id)
// }

// For
// for ( let i = 0 ; i < todos.length ; i++){
//     console.log(todos[i].text)
// }

// // console.log(todos[1].text)
// const todoJSON = JSON.stringify(todos)
// console.log(todoJSON)

//while
// let i = 5
// while( i <= 10 ){
//     console.log(i)
//     i++
// }

//ternary operator
// const x = 11
// const color = x > 10 ? 'red' : 'blue'

// console.log(color)

// const x = 9
// const color = 'green'

// switch(color) {
//     case 'red':
//         console.log('color is red')
//         break
//     case 'blue':
//         console.log('color is blue')    
//         break   
//     default:
//     console.log('Color is NOT red or blue')
//         break  
// }

//set defult value num = 1 ; num = 2
// function addNum(num1 = 1, num2 = 1){
//     // console.log()
//     return num1 + num2
// }

// const addNum = (num1 = 1, num2 = 1) => {
//     // console.log()
//     // return num1 + num2
//     console.log(num1 + num2)
// }

//縮寫省略的return
// const addNum = (num1 = 1, num2 = 1) => console.log(num1 + num2)

// const addNum = num1  => num1 + 5
// console.log(addNum(5))

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
//     this.getBirthYear = function(){
//         return this.dob.getFullYear()
//     }
//     this.getFullName = function(){
//         return ` ${this.firstName} ${this.lastName}  `
//     }
// }
// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear()
// }

// Person.prototype.getFullName = function () {
//     return ` ${this.firstName} ${this.lastName}  `
// }

// console.log(person1)
// console.log(person2.dob.getFullYear())

// console.log(person2.getBirthYear());
// console.log(person2.getFullName())

//Class
// class Person {
//     constructor (firstName, lastName, dob) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dob = new Date(dob)
//     }

//     getBirthYear () {
//         return this.dob.getFullYear()
//     }
//     getFullName () {
//         return ` ${this.firstName} ${this.lastName}  `
//     }
// }
// //object Collllllll
// const person1 = new Person('John', 'Doe', '4-3-1980')
// const person2 = new Person('Mary', 'Smith', '5-5-1999 13:10:10')

// // Instantiate object
// console.log(person2.getBirthYear())
// console.log(person1.firstName, person1.lastName)




