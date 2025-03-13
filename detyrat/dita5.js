//Detyra-1
//Given an array of numbers, return a new array where each number is squared. 

// First Method: Using for loop

const arrNumber = [2, 3, 4, 5, 6, 7];
const squareNumbers = [];
for (let i = 0; i < arrNumber.length; i++) {
    squareNumbers.push(arrNumber[i] * arrNumber[i]);
}
console.log("Squared using for loop:", squareNumbers);

// Second Method: Using map
let arrNumber1 = [2, 3, 4, 5, 6, 7];
let squaredNumbers = arrNumber1.map(num => num * num);
console.log("Squared using map:", squaredNumbers);

// =============================================================================================== //
//Detyra-2
//Given an array of words, return a new array containing only the first letter of each word.
const words = ["Hello","Weather","Time","Job","Caffe"];
let firstLetters = words.map(word=>word[0]);
console.log(firstLetters);

// =============================================================================================== //
//Detyra-3
//Given an array of objects with properties firstName and lastName, generate an array of full names by concatenating these properties.
const employer = [{firstName: "Rasim", lastName: "Behrami"}]
const fullName = employer.map(worker => `${worker.firstName} ${worker.lastName}`)
console.log(fullName);
// =============================================================================================== //
//Detyra-4
// Given an array of numbers, create a new array containing only the even numbers.
//Perdorimi i unazes for...of. 
const numbersN = [1,4,6,7,9,12,13];
const evenNumbers = [];
for(const num of numbersN){
    if(num %2 == 0){
        evenNumbers.push(num);
    }
}
console.log(evenNumbers);
//Perdorimi i metodes filter()(Chaining method)
/*const numbersN = [1,4,6,7,9,12,13];
const evenNumbers = numbersN.filter(num=>num % 2 == 0);
console.log(evenNumbers);*/

// =============================================================================================== //
//Detyra-5
//Given an array of user objects with an age property, return only the users who are 18 or older.
const persons = [   {name: "Drin", age: 14},
                    {name: "Jon", age: 30},
                    {name: "Agnesa", age: 18},
                    {name: "Adelina", age: 19}
                ];
const ageFilter = persons.filter(old=>old.age>=18); /*  Use filter when you need all matches (returns an array).
                                                        Use find when you only need the first match (returns a single element).*/
console.log(ageFilter);

// =============================================================================================== //
//Detyra-6
//Given an array of strings, return only those strings that have more than 5 characters.
const stringWords = ["Morning","Paris","Audi","Mercedes","Evening"];
const strWords = stringWords.filter(word=>word.length>5);
console.log(strWords);

// =============================================================================================== //
//Detyra-7
//Given an array of numbers, compute the sum of all elements. 
const naturalNumbers = [1,2,3,4,5,6,7,8];
const initialValue = 10; //Nese deshirojme qe mbledhja e numrave te filloj jo prej zeros po prej ndonje numri p.sh prej numrit 5,
                        //ateher e kemi vleren inicializuese plus vlerat brenda arrays. Shembull 10+1+2+3+4+5+6+7+8 = 46
const sum = naturalNumbers.reduce((shuma, value)=> shuma+value,initialValue);
console.log("Shuma e numrave eshte:",sum);

// =============================================================================================== //
//Detyra-8
//Given an array of numbers, find the maximum value
const numrat = [2,5,8,12,16];
const numriMax = numrat.reduce((max,value)=>Math.max(max,value));
console.log("vlera maksimale e dhene eshte: ",numriMax);

// =============================================================================================== //
//Detyra-9
//Given an array of strings, count how many times each unique word appears and return an object mapping words to their counts.

// =============================================================================================== //
//Detyra-10
//Given an array of transaction objects with properties amount and type, select only the transactions of type "credit", extract the amounts, and compute the total credit amount.
const myString = [
    {amount: 200,  type: "credit"},
    {amount: 2500, type: "loan"},
    {amount: 3500, type: "credit"},
    {amount: 150,  type: "credit"},
    {amount: 280,  type: "loan"}
];
const typeTransaction = myString.filter(bank=>bank.type ==="credit");
const myTransactionValue = typeTransaction.map((filObj)=>filObj.amount);
const totalSum = myTransactionValue.reduce((tsum,tvalue)=>tsum+tvalue);
console.log("Zgjedhja e transaksioneve sipas tipit 'credit': ",typeTransaction);
console.log("Nxjerrja e shumes:", myTransactionValue);
console.log("Shuma totale e kredive:", totalSum);

// =============================================================================================== //
//Detyra-11
//Given an array of numbers, remove any negative numbers, then sum the remaining numbers and calculate the average.
const numbersRange = [-10,2,-6,8,-5,4,7];
const positiveNumbers = numbersRange.filter(pnum=>pnum>0);
const sumOfPositivNumbers = positiveNumbers.reduce((posum,povalue)=>posum+povalue);
const averageNum = sumOfPositivNumbers/positiveNumbers.length;
console.log("Shtypja e numrave pozitiv:",positiveNumbers);
console.log("Shuma pergjitheshme e numrave pozitiv: ",sumOfPositivNumbers);
console.log("Vlera mesatare e numrave pozitiv: ",averageNum);
// =============================================================================================== //
//Detyra-12
//Given an array of numbers, double each number and compute the total sum of the resulting values.
const myNumbers = [2,3,4,8,9,10];
const doubledNumbers = myNumbers.map(doubled=>doubled*2);
const sumOfNumbers = doubledNumbers.reduce((sum1,doubled)=>sum1+doubled);
console.log("vlerat aktuale te array:",myNumbers);
console.log("Pasi te eshte dyfishuar secila vlere brenda array:",doubledNumbers)
console.log("Shume totale e vlerave:", sumOfNumbers);