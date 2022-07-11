//1.
function reverse(num){
    num = num + ""
    return num.split("").reverse().join("")
}
console.log(reverse(123456789))


//2.
function palindrome(str){
    let changedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'')
    let count = 0
    
    if(changedStr === ""){
        console.log("No String!")
        return false
    }

    if((changedStr.length) % 2 === 0 ){
        count = (changedStr.length) / 2
    }else{
        if(changedStr.length === 1){
            console.log("It's a palidrome!")
            return true
        }else{
            count = (changedStr.length - 1) / 2
        }
    }
    for(var i = 0; i < count; i++){
        if(changedStr[i] != changedStr.slice(-1-i)[0]){
        console.log("not a palidrome");
        return false
        }
    }
    console.log("its a palidrome");
    return true
}

palindrome("dad")
palindrome("test")
palindrome("kayak")


//3.
function foo(str){
    let combine = []
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length + 1; j++){
            combine.push(str.slice(i, j))
        }
    }
    return combine
}
console.log(foo("dog"))


//4.
function alphabetOrder(str){
    return str.split('').sort().join('')
}
console.log(alphabetOrder("BHDYALDGD"));


//5.
function upperCase(str){
    const arr = str.split(" ")

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    
    
    return arr.join(" ")
}
console.log(upperCase("this is a test"))


//6.
function longestWord(str){
    let strSplit = str.split(" ")
    let longestWord = 0 

    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length
        }
    }
    return longestWord 
}
console.log(longestWord(" Which of these are the longest? who knows? "))


//7.
function getVowel(str) {
    let vowel = str.match(/[aeiou]/gi)

    return vowel === null ? 0 : vowel.length

}
console.log(getVowel("The quick brown fox"))

//8.


//9. *
function dataType(value) {
    let dTypes = [Function, RegExp, Number, String, Boolean, Object], i, len

    if(typeof value === "object" || typeof value === "function"){
        for(i = 0; len = dTypes.length; i < len){
            i++
            if(value instanceof dTypes[i]){
                return dTypes[i]
            }
        }
    }
    return dTypes[i]
}
console.log(dataType(12));
console.log(dataType(false));
console.log(dataType("test"));


//10.
function matrix(n){
    var i;
    var j;

    for (i=0; i < n; i++)
    {
    for (j=0; j < n; j++)
    {
        if (i === j)
        {
            
            console.log(' 1 ');
        }
                
        else 
            {
            console.log(' 0 ');}
            }
        console.log('----------');
    }
}
matrix(4);


//11.
function secondGreatestAndLowest(arr) {
    arr.sort();
    return [arr[1], arr[arr.length - 2]];
};
console.log(secondGreatestAndLowest([1,2,3,4,5]))

//12.

//13.
function factorsNumber(num){
    const factors = [];
    for(let i = 1; i <= num; i++){
        if(num % i == 0){ 
            factors.push(i); 
        }
    }
    return factors;
}

//14.

//15.

//16.
const unique = (str) => {
    var result = "";
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
};
console.log(unique("thequickbrownfoxjumpsoverthelazydog"));
//17.

//18.

//19.
let returnLarger = (arr, num) => arr.filter(n => n > num);
console.log(returnLarger( [34, 16, 10, 17, 65, 1, 54], 16))


//20.
function generateID(num) {
    let text = ''
    const sam_char_list =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < num; i++) {
        text += sam_char_list.charAt(
        Math.floor(Math.random() * sam_char_list.length)
        )
    }
    return text
}

//21.

//22.
function countLet(str, letter) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            count ++;
        }
    }
    return count;
};
console.log(countLet("hello", "l"));


//23.
function nonRepeatingCharacter(x) {
    for (let i = 0; i < x.length; i++) {
        let char = x[i];
        if (x.indexOf(char) == i && x.indexOf(char, i + 1) == -1) {
        return char;
        }
    }
    return " ";
}
console.log(nonRepeatingCharacter("abacddbec"));


//24.

//25.

function longestCountryName(name) {
    return name.reduce(function (longestName, country) {
        return longestName.length > country.length ? longestName : country;
    }, "");
}
    console.log(
    longestCountryName(["Australia", "Germany", "United States of America"])
    );

//26.



//27.

// 28. 
function test(callback){
    callback()
}


// 29. 
function fName(){
    console.log(arguments.callee.name);
}
fName()
