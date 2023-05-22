function fizz_Buzz() {

let arr = [];

for (let n = 1; arr.length < 100; n++) {
   if(n % 3 === 0 && n % 5 === 0) {
    arr.push("FizzBuzz")
   } else if(n % 3 === 0) {
    arr.push("Fizz")
   } else if (n % 5 === 0){
    arr.push("Buzz")
   } else {
    arr.push(n)
   }
}
return arr
}
console.log(fizz_Buzz())

