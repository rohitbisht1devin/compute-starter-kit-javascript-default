let x = 10;
y = 20;

function add(a, b){
    console.log(a+b)
}

add(x,y);

if(x==10){
    console.log("x is 10");
} else {
    console.log("x is not 10")
}

console.log("End of script");

let obj = {
    name: "John"
};

console.log(obj.name);

console.log('This is a string with a length greater than 80 characters, which is the maximum allowed length for a line in this file. Therefore, this line should trigger a linting error due to exceeding the maximum length limit.');

console.log("This line has an unnecessary semicolon;");

function divide(a, b){
    return a / b;
}

console.log(divide(10, 0));

let arr = [1, 2, 3, 4, 5];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("This line has a trailing space at the end. ");

console.log("This line has a trailing comma",);

function foo(){
    return
    {
        name: "John"
    }
}

console.log(foo());

let str = "    This line has mixed spaces and tabs.    ";

console.log(str);

let emptyLines = 1;




console.log("This line has irregular whitespace between the words.");

function hasPrototypeProperty(object, property) {
    return object.hasOwnProperty(property);
}

console.log(hasPrototypeProperty(obj, 'name'));

let regex = /\\d+/;

console.log("This line has a useless escape character: \\");

for(var i = 0; i < 5; i++) {
    console.log(i);
}

try {
    // Some code that may throw an error
} catch (error) {
    console.log(error);
} finally {
    console.log("This line contains an unsafe 'finally' block.");
}

console.log("This line contains an unsafe negation: !!x");


