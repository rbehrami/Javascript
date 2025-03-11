/* Detyrat e dates 9 Mars 2025 */

//Detyra-1
//Find the index of "carrot" in ["potato", "carrot", "onion", "carrot", "tomato"].

const vegetables = ["potato","carrot", "onion", "carrot", "tomato"];
//Find index of carrot
const index = vegetables.indexOf("carrot");
console.log("Index of carrot is:",index);

// ======================================================================================================== //
//Detyra-2
//Find the last occurrence of 8 in [4, 8, 15, 8, 23, 8, 42].
const numbers = [4,8,15,8,23,8,42];
const lastEight = numbers.indexOf(8,4);
console.log("Last occurrence of 8 is:",lastEight);

// ======================================================================================================= //
//Detyra-3
//Check if "grapefruit" exists in ["apple", "orange", "grapefruit", "pineapple"]. 
const vegetable1 = ["apple", "orange", "grapefruit", "pineapple"];
const checkVegetable = vegetable1.includes("grapefruit");
console.log("Given vegetable exist:",checkVegetable);

// ======================================================================================================= //
//Detyra-4
//Find the first product with a price greater than 50 in [ { name: "Laptop", price: 1000 }, { name: "Mouse", price: 25 }, { name: "Keyboard", price: 75 } ].
const products = [
    {name: "Laptop", price: 1000},
    {name: "Mouse", price: 25},
    {name: "Keyboard", price: 75}
];
const firstProductOver50 = products.find(product=>product.price>50);
console.log("First Product greater than 50, is: ",firstProductOver50);

// ======================================================================================================= //
//Detyra-5
//Find the index of the first number greater than 10 in [3, 8, 12, 5, 15].
const numberGreater10 = [3, 8, 12, 5, 15];
const findIndexGreater10 = numberGreater10.findIndex(number=>number>10);
console.log(findIndexGreater10);

// ======================================================================================================= //
//Detyra-6
//Add "Monday", "Tuesday", and "Wednesday" to an empty array.
const days = [];
const addDays = days.push("Monday","Tuesday","Wednesday");
console.log("Days of the week added are:",days);

// ======================================================================================================= //
//Detyra-7
//Remove the last element from ["Earth", "Mars", "Jupiter", "Venus"] and print it
const planets = ["Earth", "Mars","Jupiter", "Venus"];
planets.pop();
console.log(`We have removed last element from "Earth", "Mars", "Jupiter", "Venus":`, planets);

// ======================================================================================================= //
//Detyra-8
//Add "first" and "second" to the beginning of [ "third", "fourth", "fifth" ].
const startNumbers = ["third","fourth","fifth"];
startNumbers.unshift("first","second");
console.log("After we have added first and second:", startNumbers);

// ======================================================================================================= //
//Detyra-9
//Add "first" and "second" to the beginning of [ "third", "fourth", "fifth" ]. 
const countElements = [ "third", "fourth", "fifth" ];
countElements.unshift("first","second");
console.log("After addedd first and second to the beginning ",countElements);

// ======================================================================================================= //
//Detyra-10
//Remove the third and fourth elements from [1, 2, 3, 4, 5, 6, 7].
const numbers1 = [1,2,3,4,5,6,7];
const newArray = numbers1.splice(2,2);
console.log(numbers1);

// ======================================================================================================= //
//Detyra-11
//Insert "strawberry" and "blueberry" at index 2 in ["apple", "banana", "cherry"].
const fruits = ["apple", "banana", "cherry"];
fruits.splice(2,0,"strawberry","blueberry");
console.log(fruits);

// ======================================================================================================= //
//Detyra-12
//Replace the first two elements in ["a", "b", "c", "d", "e"] with "x" and "y". 
const alphabet = ["a","b","c","d","e"];
alphabet[0]="x";
alphabet[1]= "y";
console.log("After x and y is replaced:",alphabet);

// ======================================================================================================= //
//Detyra-13
//Sort [99, 12, 45, 6, 78] in ascending order.
const randomNumbers=[99,12,45,6,78];
const sortedNumbers = randomNumbers.sort((a,b)=>a-b);
console.log(sortedNumbers);

// ======================================================================================================= //
//Detyra-14
//Sort ["zebra", "monkey", "aardvark", "elephant"] alphabetically.
const characters = ["zebra","monkey","aardvark","elephant"];
const sortedCharacters = characters.sort();
console.log(sortedCharacters);

// ======================================================================================================= //
//Detyra-15
//Sort [25, 5, 100, 50] so that the numbers appear in numerical order.
const numbersOrder = [25,5,100,50];
const numbersOrderSorted = numbersOrder.sort((a,b)=>(a-b));
console.log(numbersOrderSorted);

// ======================================================================================================= //
//Detyra-16
//Reverse ["red", "green", "blue", "yellow"]. 
const colors = ["red","green","blue","yellow"];
colors.reverse();
console.log(colors);

// ======================================================================================================= //
//Detyra-17
//Reverse [14, 7, 22, 9, 5] and find the smallest value.
const numbers3 = [14,7,22,9,5];
numbers3.reverse();
const minValue= Math.min(...numbers3);
console.log("Renditja e ngjyrave nga e fundit ne te fillimit (reverse)",numbers3);
console.log("Vlera ma e vogel brenda vargut (14,7,22,9,5), eshte:",minValue);

// ======================================================================================================= //
//Detyra-18
//Find the first word that contains the letter "e" in ["cat", "dog", "elephant", "antelope"].
const words = ["cat","dog","elephant","anttelope"];
const wordFound = words.find(word=>word.includes('e')); //word.includes('e') checks if the current word contains the letter "e".
console.log(wordFound);

// ======================================================================================================= //
//Detyra-19
//Find the last occurrence of "hello" in ["hi", "hello", "hey", "hello", "hola"].
const helloWords = ["hi", "hello", "hey", "hello", "hola"];
const lastOccurrence = helloWords.lastIndexOf("hello");
console.log(lastOccurrence);

// ======================================================================================================= //
//Detyra-20
//Check if 42 exists in [10, 20, 30, 40, 50].
const numbersOf = [10,20,30,40,50];
if(numbersOf.includes(42)){
    console.log("Number 42, exist in the array.")
}else{
    console.log("Number 42, doesn't exist in the array.")
}
//or
const numbersOf1 = [10,20,30,40,50];
console.log(numbersOf1.includes(42));

// ======================================================================================================= //
//Detyra-21
//Find the first employee with a salary greater than 50000 in [ { name: "Alice", salary: 45000 }, { name: "Bob", salary: 60000 }, { name: "Charlie", salary: 70000 } ].

const employeer = [
    { name: "Alice", salary: 45000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 70000 }
];
const firstEmployeerGreate5000 = employeer.find(employee=>employee.salary>50000);
console.log(firstEmployeerGreate5000);

// ======================================================================================================= //
//Detyra-22
//Remove the last two elements from [5, 10, 15, 20, 25, 30]
const removeLastTwo = [5,10,15,20,25,30];
removeLastTwo.splice(4,2);
console.log(removeLastTwo);

// ======================================================================================================= //
//Detyra-23
//Insert "x" and "y" at the start of ["a", "b", "c", "d"]. 
const alphabet1 = ["a","b","c","d"];
alphabet1.unshift("x","y");
console.log(alphabet1);

// ======================================================================================================= //
//Detyra-24
//Replace the last element in ["one", "two", "three", "four"] with "last". 
let wordNumbers = ["one","two","three","four"];
let index1 = wordNumbers.indexOf('four');
wordNumbers[index1] = 'last';
console.log(wordNumbers);

// ======================================================================================================= //
//Detyra-25
//Sort [3, 1, 4, 1, 5, 9] in descending order. 
const descendingOrder = [3,1,4,1,5,9];
const descendingSorted = descendingOrder.sort((a,b)=>b-a);
console.log("Descending Order:",descendingSorted);

// ======================================================================================================= //
//Detyra-26
//Reverse ["morning", "afternoon", "evening", "night"] and print the first element.
const partsOfTheDay = ["morning", "afternoon","evening","night"];
partsOfTheDay.reverse();
console.log(partsOfTheDay);

// ======================================================================================================= //
//Detyra-27
//Find the first string longer than 5 characters in ["hi", "hello", "greetings", "hey"].
const firstString = ["hi", "hello", "greetings", "hey"];
const foundString = firstString.find(string=>string.length>5);
console.log("First string longer than 5 characters is:",foundString);

// ======================================================================================================= //
//Detyra-28
//Remove "middle" from ["start", "middle", "end"] without using direct index access.
const startMEnd = ["start","middle","end"];
const removeElement = "middle";
const newStartMEnd = startMEnd.filter(element=>element !== removeElement);
console.log(newStartMEnd);

// ======================================================================================================= //
//Detyra-29
//Insert 2024 at the correct index in [2019, 2021, 2023, 2025] to maintain order.
const maintainOrder = [2019,2021,2023,2025];
const elementToInsert = 2024;
const insertIndex = maintainOrder.findIndex(element=>element>elementToInsert);
if(insertIndex === -1){
    maintainOrder.push(elementToInsert);
}else{
    maintainOrder.splice(insertIndex,0,elementToInsert);
}
console.log(maintainOrder);

// ======================================================================================================= //
//Detyra-30
//Replace every even number in [2, 3, 4, 5, 6, 7, 8] with "even".
const numbersArray = [2, 3, 4, 5, 6, 7, 8];
const newNumberArray = numbersArray.map(evennumber=>(evennumber % 2 !=0 ? "even" : evennumber));
console.log(newNumberArray);

// ======================================================================================================= //
//Detyra-31
//Sort [true, false, true, false, true] so that all false values appear first.
const trueFalsValue = [true, false, true, false, true];
trueFalsValue.sort((a,b)=>a===b ? 0 : a ? 1 : -1);
console.log(trueFalsValue);

// ======================================================================================================= //
//Detyra-32
//Reverse ["alpha", "beta", "gamma", "delta"] and find the last element. 
const arrayMode = ["alpha", "beta", "gamma", "delta"];
const reversedArray = arrayMode.reverse();
const lastElement = reversedArray[reversedArray.length-1];
console.log("Reversed Array:",reversedArray);
console.log("Last element after reversed:",lastElement)

// ======================================================================================================= //
//Detyra-33
//Find the first person whose name starts with "J" in ["Alice", "Bob", "Charlie", "Jack", "Jill"].
const person = ["Alice", "Bob", "Charlie", "Jack", "Jill"];
const firstPerson = person.find(person=>person.startsWith("J"));
console.log("First Person whose name starts with J, is:", firstPerson);