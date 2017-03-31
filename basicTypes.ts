//name: string = 'Sandhya';
function hello(str: string): void {
    console.log("Hello "+str);
}

hello("Sandhya"); //output: hello Sandhya
//hello(1); //warning: number is not assignable to parameter of type string

console.log("****Basic Types****");

let b: boolean = true;
console.log("b is "+ typeof(b)+ " with value "+ b); //b is boolean with value true

//In Typescript all numbers are floating point values
let n: number = 7;
let hex: number = 0xf00d;
let binary: number = 0b1010; 
let octal: number = 0o744;
console.log("n is "+ typeof(n)+ " with value "+ n ); // n is number with value 7
console.log("hex is "+ typeof(hex)+ " with value "+ hex ); //hex is number with value 61453

//Strings can be enclosed either in double quotes or single
let s: string = 'Sandhya';
let hero: string = "Anji";
let student: string = ` Hello, my name is ${s}.

Welcome to my practice session of TypeScript!!
`
console.log("s is "+ typeof(s)+ " with value "+ s); //s is string with value Sandhya
console.log("Example of template strings: "+ student); //Example of template strings:  Hello, my name is Sandhya.

//Welcome to my practice session of TypeScript!!

let anything: any = 'hello';
console.log("anything is "+ typeof(anything)+ " with value "+ anything); //anything is string with value hello
anything = 77;
console.log("Again anything is "+ typeof(anything)+ " with value "+ anything); //anything is number with value 77

let Arr: string[] = ['first','second','third']; //This array can contain only strings
let AnoArr: any[] = ['aa',5,false]; //Use "any"" to define different types in an array
let names: Array<string> = ['Anji','Sandhya']; //generic declaration of array

//enum is a friendly way to give friendly name to sets of numeric values
enum Countries {India, UK, Netherlands};
let myCountry:Countries = Countries.India;
//By default enums begin numbering their members starting at 0
console.log(myCountry + " is my country"); //0 is my country
console.log("Countries is "+ typeof(Countries)+ " with value "+ Countries[0]); //Countries is object with value India
//values can be manually set to their members
enum Color {Red = 7,Blue, Green} //numbering starts from 7 and continues as 8,9
console.log("One of my favorite color is "+ Color[9]);
enum Friends {Ravali = 11, Harish = 33, Alekhya = 22};
console.log("My close friend is "+ Friends[11]);

//Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. 
let details: [string,number,number];
details = ['Sandhya',17,23];
console.log("Details is of type " + typeof(details)+" with second value is "+details[1]); //Details is of type object with second value is 17


//Void is opposite to any i.e. not having any type at all. Usually used to represent that function doesnt return any value
function welcomeNote(): void {
    //alert("Good Morning, welcome to my page");
}
welcomeNote();

//Declaring variables of type void is of no use as only null and undefined can be assigned to it.
let noUse: void = undefined;
console.log("noUse is of type "+ typeof(noUse)+ "with value "+noUse); //noUse is of type undefined

//Null and Undefined are subtypes of others which means you can assign them to variables of other types
let Und: undefined = undefined;
let nullValue: null = null;


// never represent type of values that never occur. 
// never is a subtype and assignable to any other type but not vice versa, even any cannot be assigned to never
// never is a return for a function that always throws exceptions, one that never returns  (infinite loop)
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("something failed");
}

function infiniteLoop (): never {
    while (true) {
    }
}

//Type Assertions: way to tell compiler "Trust me, i know what I'm doing"
//no special checking or data restructuring. No runtime impact, purely used by compiler
let course = 'TypeScript';
let cLength = (<string>course).length; // Angular
let ccLength = (course as string).length; // using 'as' - preferred for TypeScript with JSX

console.log ("Length of "+ course + " is "+ cLength + " or " + ccLength); //Length of TypeScript is 10 or 10