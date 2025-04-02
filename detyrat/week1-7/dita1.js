//Detyra 1
//Formula per konvertimin nga Celsius ne Fahrenheit - F=(Celsius * 1.8) + 32
// Programi per konvertimin nga Celsius ne Fahrenheit
// Deklarojm nje variabel me vleren 25, ku 25 eshte celsius 
const celsius = 25;
// llogaritja e fahrenheit
const fahrenheit = (celsius * 1.8) + 32;
console.log(`${celsius} grade C (celsius), jane te barabarta me ${fahrenheit} grade F (fahrenheit).`);

//=========================================================================================//
//Detyra 2
//Programi qe na tregon se numri i dhene eshte cift ose tek
const a = 6;
//Kushti per te kontrolluar nese numri eshte cift ose tek
if(a % 2 == 0){
    console.log("Numri i dhene eshte numer cift");
}else{
    console.log("Numri i dhene eshte numer tek");
}

//========================================================================================//
//Detyra 3
//Programi i cili e kontrollon numrin a eshte positiv, negativ ose zero
const num = -0.5;
if(num>0){
    console.log("Numri i dhene eshte pozitiv");
}else if(num<0){
    console.log("Numri i dhene eshte negativ");
}else{
    console.log("Numri i dhene eshte zero");
}

//=======================================================================================//
//Detyra 4
//Programi per gjetjen e numrit me te medha ndermjet tre numrave
const num1 = 10;
const num2 = 5;
const num3 = 7;
//Kushti i krahason te tri vlerat per me gjet vleren ma te madhe
if(num1>num2 && num1>num3){
    console.log(`Numri ${num1} eshte numri me i madh`)
}else if(num2>num1 && num2>num3){
    console.log(`Numri ${num2} eshte numri me i madh`);
}else{
    console.log(`Numri ${num3} eshte numri me i madh`);
}

//======================================================================================//
//Detyra 5
//Programi per te treguar vitin e brishte
const vitiBrisht = 2028;
//kemi tri kushte per te gjetur vitin e brisht
if((0 == vitiBrisht % 4) && (0 != vitiBrisht % 100) || (0==vitiBrisht % 400)){
    console.log(`Viti ${vitiBrisht} eshte vit i brisht`);
}else{
    console.log(`Viti ${vitiBrisht} nuk eshte vit i brisht`);
}

//======================================================================================//
//Detyra 6
const score = 110;
//Programi per vlersim ne test
if(score >=101 ){
    console.log('Verejtje: Ju keni vendosur vlere te pa lejuar. Ju lutemi vendoseni nje vlere ndermjet 0 - 100.');
}else if(score >=90){
    console.log("Ju keni marr A ne test");
}else if(score >=80){
    console.log("Ju keni marr B ne test");
}else if(score >=70){
    console.log("Ju keni marr C ne test");
}else if(score>=60){
    console.log("Ju keni marr D ne test");
}else{
    console.log("Ju keni marr F ne test");
}