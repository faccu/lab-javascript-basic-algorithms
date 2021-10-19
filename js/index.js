// Iteration 1: Names and Input

let hacker1 = "Juan";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Antonio";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, XX characters!`);
  }

// Iteration 3: Loops

let hacker1Upper = "";
for(let i=0; i < hacker1.lenght; i++) {
  hacker1Upper += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1.toUpperCase().split("").join(" "));

let hacker2Inverted = "";
for(let i = hacker2.lenght - 1; i >= 0; i--){
  hacker2Inverted += hacker2[i];
}
console.log(hacker2.split('').reverse().join(''));

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
}