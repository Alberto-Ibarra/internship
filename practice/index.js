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

const str = 'abc'
//acc = accumilator

console.log(str.split('').reduce((acc, cur) => acc + cur + cur , ''));
// '' + a + a = 'aa' + b + b = aabb + c + c = aabbcc

// function foo(arr){
//     const obj = {}

//     arr.forEach(ele => {
//         obj[ele.name] = ele.age
//     })

//     return obj
// }

//reduce will return any data type
function foo2(arr){
    const obj = arr.reduce((acc, cur) => {
        acc[cur.name] = cur.age
        return acc
    }, {})
    return obj
}

const input = [
    {name: 'albert', age: 30},
    {name: 'dylan', age: 7},
    {name: 'daniel', age: 28}
]

console.log( foo2(input) );



function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName
  };
  
  const myFather = new Person("John", "Doe", 50, "blue");

    console.log(myFather.name());
