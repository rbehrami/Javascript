                        //Realizimi i detyrave me funksion
                        
//Detyra-1:
//Kerkesa e detyres: Te shkruhet programi per konvertimin Celsius ne Fahrenheit
//E deklarojme nje funksion me emrin celcToFahr me nje argument celcValue
function celcToFahr(celcValue){
    //Ternary Operator
    return ((celcValue*9.0/5.0)+32); 
}
//ekzekutimi i funksionit
console.log('Vlera ne Fahrenheit:', celcToFahr(25));
//==========================================================================================================//

//Detyra-2:
//Kerkesa e detyres: Te shkruhet programi i cili na tregon se numri i dhene eshte numer cift ose numer tek
//E deklarojme nje funksion me emrin findNum me nje argument num
function checkOddOrEven(number) {
    //Ternary Operator
    return (number % 2 == 0) ? "Numri eshte cift" : "Numri eshte tek";
}
//ekzekutimi i funksionit
console.log(checkOddOrEven(4));
//===========================================================================================================//

//Detyra-3
//Kerkesa e detyres: Te shkruhet programi i cili na tregon se numri i dhene eshte pozitiv, negativ ose zero
//E deklarojme nje funksion me emrin checkNumber, dhe e emerojme nje parameter me emrin number
function checkNumber(number){
    //Ternary Operator
    return number > 0 ? "Numri eshte pozitiv" : number === 0 ? "Numri eshte zero" : "Numri eshte negativ";
}
//ekzekutimi i funksionit
console.log(checkNumber(-5));
//===========================================================================================================//

//Detyra-4
//Kerkesa e detyres: Te shkruhet kodi i cili gjen numrin me te madhe nese jane dhene tre numra te ndryshem
function bigestNumber(num1,num2,num3){
    let result;
    if(num1>num2 && num1>num3){
        result=`Numri ${num1} eshte numri me i madh`;
    }else if(num2>num3){
        result=`Numri ${num2} eshte numri me i madh`;
    }else{
        result=`Numri ${num3} eshte numri me i madh`;
    }
    return result;
}
//ekzekutimi i funksionit
console.log(bigestNumber(10,11,6));
//===========================================================================================================//

//Detyra-5
//Kerkesa e detyres: Shkruani kodin i cili tregon se viti i dhene eshte Vit i brisht ose nuk eshte vit i brisht
function vitiBrisht(viti){
     //Ternary Operator
    return 0==viti %4 && 0!= viti%100 || 0==viti % 400 ? "Viti eshte vit i brisht" : "Viti nuk eshte vit i brisht";
}
//ekzekutimi i funksionit
console.log(vitiBrisht(2028));
//===========================================================================================================//

//Detyra-6
//Kerkesa e detyres: Te shkruhet kodi per sistemin vlersues te notimit ne test
function scorePoints(piketFituara){
    let mesazhiKushtit;
    if(piketFituara >= 101){
        mesazhiKushtit = 'Verejtje: Ju keni vendosur vlere te pa lejuar. Ju lutemi vendoseni nje vlere ndermjet 0 - 100.';
    }else if(piketFituara >=90){
        mesazhiKushtit = "Ju keni marr A ne test";
    }else if(piketFituara >= 80){
        mesazhiKushtit = "Ju keni marr B ne test";
    }else if(piketFituara >= 70){
        mesazhiKushtit = "Ju keni marr C ne test";
    }else if(piketFituara >= 60){
        mesazhiKushtit = "Ju keni marr D ne test";
    }else{
        mesazhiKushtit = "Ju keni marr F ne test";
    }
    return mesazhiKushtit;
}
//ekzekutimi i funksionit
console.log(scorePoints(60));
//===========================================================================================================//

//Detyra-7
//Kushti i detyres: Te shkruhet kodi i cili na e shfaq cmimin e nje produkti (p.sh. Telefonit) pas zbritjes.
//Telefoni kushton 200euro, dhe ka rene ne zbritje prej 20%
//deklarimi i funksionit
function cmimiMeZbritje(cmimitelefonit,zbritja){
    return cmimitelefonit-(cmimitelefonit*zbritja);
}
//ekzekutimi i funksionit
console.log('Cmimi pas zbritjes eshte:', cmimiMeZbritje(200,0.2));
//===========================================================================================================//

//Detyra-8
//Pershkrimi i detyres: Shkruani kodin i cili ne baze te moshes na tregon se personi eshte minorent, tinejxher ose i rritur
function checkAge(age){
    let pershkrimi;
    //Ternary Operator
    return age<14 ? "Personi eshte minorent" : age>14 && age<25 ? "Personi eshte tinejxher" : "Personi eshte i rritur";
}
//ekzekutimi i funksionit
console.log(checkAge(26));
//===========================================================================================================//

//Detyra-9
//Kushti i detyres: Te shkruhet kodi qe na mundeson kthimin e vleres ne Celsius ne ate Fahrenheit
//Deklarimi i funksionit convertValue
//Formula per konvertim nga Celsius ne Fahrenheit eshte (Celsius * 9/5)+32
function convertValue(Celsius){
    return (Celsius * 1.8)+32;
}
//ekzekutimi i funksionit
console.log('Vlera ne Fahrenheit:', convertValue(25));
//===========================================================================================================//

//Detyra-10
//Pershkrimi i detyres: Te shkruhet kodi i cili mundeson llogaritjen e siperfaqes se rrethit
//Formula: A = π r*2, r - eshte radiusi, te cilin e vendosim si vler hyrese
function areaOfCircle(radius){
    let A;
    return A = Math.PI * Math.pow(radius,2);
}
//ekzekutimi i funksionit
console.log(`Siperfaqja e rrethit eshte`, areaOfCircle(7));
