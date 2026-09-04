console.log("hello world");
console.log("from script.js file");
const myName = "Marjorie";
let age = 21;
let number = "09876543211";
let address = "brgy 19-A canetown subdivision"
let saiseyte = "67"



console.log(`My name is ${myName}`);
console.log(`age: ${age}`);
console.log(`number: ${number}`);
console.log(`address: ${address}`);
console.log(67);
 
function greet(greetings, names = []){
    if (Array.isArray (names)){
        names = names.join(",");
    
    return `${greetings} sa inyo ${names}`;
} 
}

console.log(greet("mayung aga" , ["guian", "jere", "dy", "marjorie"] ));

const heading =  document.querySelector("h1");
heading.textContent = "Joeffer Gonzaga"
console.log(heading); 

 const contactHeading = document.querySelector("#contact form");
 console.log(contactHeading);

 const projectHeading = document.querySelector("#services h2");
 console.log(projectHeading);


