// Fizz Buzz //

let num = 15;
if (num % 3 == 0 && num % 5 == 0) {
 console.log("fizz buzz");
} else if (num % 3 == 0) {
  console.log("fizz"); 
} else if (num % 5 == 0) {
  console.log("buzz");
} else {
  console.log(num);
}

// Random  / numbers 1-50 -  6 times to console //

for  (let i=0; i<6; i++) {        
 console.log(Math.round((Math.random() * 50)+1));
}
// Count back 9 to 0 // 
let array =[]
for (let i=9; i>0; i-=1){
array.push(i);
}
console.log(array)

// Pet Drink-Eat // 

let pooch = {
    name: "Misty",
    Type: "Dog",
    Age: 340,
    colour: "Black",
eat()
{
return console.log(`${this.name} is scoffing dinner`)
},
drink()
{
return console.log(`${this.name} is drinking out in toilet !`)
}}
pooch.eat()
pooch.drink()

// Incorrect Password if < than 8 characters.//

let password = "password"
if (password.length == 8)
{
console.log("correct")
}
else if (password.length <= 8)
{
console.log("incorrect")
}

// Random number between 1 to 30,  6 times & if divisible / 7. /// 

for (let i=0; i<6; i++){
    (math.round((math.random()*30) +1))
    if (i % 7 ==0){
    console.log(`${random} can divided by 7`)
    } else
    console.log(`${random}cannot  divided by 7`)
    }
    for  (let i=0; i<6; i++) {
    let numz = (Math.floor((Math.random()*30)))}
////
