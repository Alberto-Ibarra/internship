// day 2 notes

// function foo(){
//     return {name: 'TT'}
// }

// const tt = new foo()
// const dd = new foo()

// class Person{
//     constructor(){}
// }

// function Person(){
//     this.name = 'Albert'
//     // this.show = function(){
//     //     console.log(this.name);
//     // }
// }
// Person.prototype.show = function() {
//     console.log(this.name);
// }
// const p = new Person()
// console.log(p);




// const obj = {
//     name: 'albert',
//     age: 30
// }
// console.log(Object.entries(obj)); // key & value pairs
// console.log(Object.keys(obj)); //obj key
// console.log(Object.values(obj)); // obj value

// // console.log(obj['name']);


// for(let i = 0; i < arr; i++){
//     if(arr[i] === 42){
//         continue
//     }
//     console.log(arr[i]);
// }

// for(const num in arr){
//     console.log(arr[num]);
// }

// const arr = [2, 4, 6, 8]

// Array.prototype.myForEach = function() {
//     console.log(this);
// }
// //cur = current, i = index, self = self arr
// arr.myForEach(function(cur, i, self){
//     arr[i] = cur + 1
// })


// console.log(arr);

// const str = 'abc'
// //acc = accumilator

// console.log(str.split('').reduce((acc, cur) => acc + cur + cur , ''));
// '' + a + a = 'aa' + b + b = aabb + c + c = aabbcc

// function foo(arr){
//     const obj = {}

//     arr.forEach(ele => {
//         obj[ele.name] = ele.age
//     })

//     return obj
// }

//reduce will return any data type
// function foo2(arr){
//     const obj = arr.reduce((acc, cur) => {
//         acc[cur.name] = cur.age
//         return acc
//     }, {})
//     return obj
// }

// const input = [
//     {name: 'albert', age: 30},
//     {name: 'dylan', age: 7},
//     {name: 'daniel', age: 28}
// ]

// console.log( foo2(input) );



// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName
//   };

//   const myFather = new Person("John", "Doe", 50, "blue");

//     console.log(myFather.name());



//rest parameter vs spread operator

//rest parameter
//can only be last parameter
// function foo(a,b,...args){
//     console.log(a);
// }
// foo(3,4,5, true)

// //spread operator
// const arr = [1,2,3]
// const copyArr = [1, ...arr, 5]
// console.log(copyArr);

// const obj = {
//     name: 'albert'
// }

// const copyObj = {
//     ...obj,
//     name: 'dylan',
//     age: 7
// }

// console.log(copyObj);



// object copy

// const obj = {
//     name: 'albert',
//     isOpen: false,
//     id: 123,
//     children: [1, 2, 3],
//     date: new Date(),
//     // foo: function(){}
// }

// const obj1 = obj

// // console.log(obj1);

// const obj2 = {...obj}

// // console.log(obj2);


// //can change an object to a string with JSON.stringify
// //can change it back with JSON.parse
// //JSON.parse will loose function in original obj
// console.log(obj, JSON.parse(JSON.stringify(obj)));

// //structuredClone  does not copt functions
// //rarely used
// const obj3 = structuredClone(obj)
// console.log(obj3);

//Lodash | _.cloneDeep() Method





//this

// console.log(this);
// function foo(){
//     console.log(this);
// }
// foo()

// const obj = {
//     pi: 3.14,
//     foo: function(){
//         console.log('foo', this);

//         function bar(){
//             console.log('bar', this);
//         }
//         bar()
//     }

// }
// obj.foo()

// class Person {
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }
// }

// const p = new Person('albert', 30)



// 3 this methods | bind, call, apply
// const obj = {
//     name: 'albert'
// }
// function printName(age, company){
//     console.log(this.name, age, company);
// }
// printName()
// // bind method
// //bind will only bind 'this' key word
// //bind will generate a new function
// const print = printName.bind(obj) // lazy
// print(12, 'antra')

// //call method
// //call will trigger function immedietally 
// printName.call(obj, 12, 'antra' ) //eager

// // apply method
// //loads arguments in array
// printName.apply( obj, [12, 'antra'])




// arrow function
// const foo(){
//     console.log(arguments);
// }

// const foo = () => {
    
// }
// foo()



//high order function, curring, closure

// function foo(n){
//     return function(m){
//         return n + m
//     }
// }
// const bar = foo(4)
// console.log(bar(5));


//  interview question (high order function)
// const target = (a,b,c) => console.log(a + b, c);
// // const tar = (a, b, c) => {
// //     console.log(a + b * c % d);
// // }
// // 2 in param limits how many times function is ran
// const fn = limitedfunction(2, target) // target, counter = 0
// fn(2, 3, 6) // 5
// fn(3, 3) // 6
// fn(2, 6) // 8
// fn(2, 6) // 8
// fn(2, 6) // 8
// const fnone = limitedfunction(2, target)

// function limitedfunction(num, target){
//     let counter = 0;

//     return function(...args){ // rest parameter
//         if(counter === num){
//             console.log('over limited');
//         }else{
//             target(...args) // spread operator
//             counter++
//         }
//     }
// }



// // interview question (currying)
// const callback1 = (a) => a + 2 // 7
// const callback2 = (b) => b * 2 // 14
// const callback3 = (c) => c / 2 // 0

// console.log(runAll(callback1, callback2, callback3)(5));

// function runAll(...args){

//     return function(num){
//         return args.reduce((acc, cur) => cur(acc), num)

//         // let res = num
//         // while(args.length){
//         //     const cb = args.shift()
//         //     res = cb(res)
//         // }
//         // return res
//     }
// }




// event loop   *interview question 
//var will output 5 five times
//let will output 0 1 2 3 4
// for(let i = 0; i < 5; i++){
//     //settimeout() is a built in function for vanilla js
//     setTimeout(() => console.log(i), i * 1000)
// }

//call stack: [for, setTimeout], 
// web api, async api: 
// task queue: [() => console.log(i)]



// interview question 

// const first = [
//     {userid: 1, name: 'albert'},
//     {userid: 2, name: 'al'},
//     {userid: 3, name: 'bert'},
//     {userid: 4, name: 'ert'},
// ]
// const second = [
//     {userid: 5, role: 'wizard'},
//     {userid: 6, role: 'druid'},
//     {userid: 7, role: 'mage'},
//     {userid: 8, role: 'warrior'},
// ]
// function solution(farr, sarr){
//     const arr = [...farr, ...sarr]
//     const map = {}


//     arr.forEach(ele => {
//         map[ele.userid] = {
//             ...{userid: null, name: null, roll: null},
//             ...map[ele.userid],
//             ...ele,
//         }
//     })
//     console.log(map);
//     return Object.values(map)
// }

// console.log(solution(first, second));


// [
//     {userid: 3, name: 'bert'},
//     {userid: 8, name: 'dert'},
//     {userid: 1, name: 'albert'},
// ]




// callback function
// const foo = () => console.log('foo');
// const randomTime = () => Math.floor(Math.random() * 6)

// const callFunctionRandom = callback => {
//     const timer = randomTime()
//     console.log(`wait for ${timer}s`);

//     setTimeout(callback, timer * 1000)
// }

// callFunctionRandom(() => {
//     callFunctionRandom(foo)
// })

// const url = 'https://jsonplaceholder.typicode.com/todos'

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(JSON.parse(xhttp.response));
//     }
// };
// xhttp.open("GET", url);
// xhttp.send();

// const getTodo = (id, callback) => {
//     const baseUrl = "https://jsonplaceholder.typicode.com/todos";

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             callback(JSON.parse(xhttp.response));
//         }
//     };
//     xhttp.open("GET", baseUrl + '/' + id);
//     xhttp.send();
// };
// const print = (data) => console.log(data);

// getTodo(12, print);


// class MyPromise {
//     thebncbqueue = []
//     currentData = undefined

//     constructor(executer){
//         executer(this.res.bind(this), this.rej)
//     }

//     res(resData){
//         setTimeout(() => {
//             this.currentData = resData
//             while (this.thebncbqueue.length) {
//                 const cb = this.thebncbqueue.shift()
//                 this.currentData = cb(this.currentData)
//         }
//         }, 0)

// }

//     rej = () => {}

//     then(thencb){
//         this.thebncbqueue.push(thencb)
//         return this
//     }
//     catch(){}
// }

// new MyPromise((res, rej) => {
//     res(123)
// })
//     .then(data => {
//         console.log(data);
//         return 346
//     })
//     .then(data12 => console.log(data12))


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // expected output: Array [3, 42, "foo"]



// const getTodo = (id) => {
// 	const baseUrl = "https://jsonplaceholder.typicode.com/todos";

// 	return new Promise((resolve, reject) => {
// 		const xhttp = new XMLHttpRequest();
// 		xhttp.onreadystatechange = function () {
// 			if (this.readyState == 4 && this.status == 200) {
// 				resolve(JSON.parse(xhttp.response));
// 			}
// 		};
// 		xhttp.open("GET", baseUrl + "/" + id);
// 		xhttp.send();
// 	});
// };

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

