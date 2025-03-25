//Funksioni per mbledhjen e dy numrave
function getAdd(){
    //merr  vleren hyrese te numrit1 me id "numri1"
    const numri1 = Number(document.getElementById("numri1").value);
    //merr vleren hyrese te numrit2 me id "numri2"
    const numri2= Number(document.getElementById("numri2").value);
    //llogaritja e shumes nga dy vlerat e dhena
    const shuma = numri1+numri2;
    //shtypja e vleres se shumes
    console.log(shuma);
    //paraqite rezultatin ne inputin me klasen shuma
    document.getElementById("shuma").value =shuma;
    //ndryshimi i ngjyres se shunmes ne inputin me klasen shuma
    document.getElementById("shuma").style.color="red";
}
//funksioni per zbritjen e dy numrave
function getSubtrack(){
    const numri3 = Number(document.getElementById("numri3").value);
    const numri4= Number(document.getElementById("numri4").value);
    const zbritja = numri3-numri4;
    console.log(zbritja);
    document.getElementById("zbritja").value =zbritja;
    document.getElementById("zbritja").style.color="red";
}
//funksioni per shumzimin e dy numrave
function getMultiplication(){
    const numri5 = Number(document.getElementById("numri5").value);
    const numri6= Number(document.getElementById("numri6").value);
    const shumzimi = numri5*numri6;
    console.log(shumzimi);
    document.getElementById("shumzimi").value =shumzimi;
    document.getElementById("shumzimi").style.color="red";
}
//funksioni per pjestimin e dy numrave
function getDivider(){
    const numri7 = Number(document.getElementById("numri7").value);
    const numri8= Number(document.getElementById("numri8").value);
    const pjestimi = numri7/numri8;
    console.log(pjestimi);
    document.getElementById("pjestimi").value =pjestimi;
    document.getElementById("pjestimi").style.color="red";
}
//funksioni per gjetjen e vleres nga perqindja
function getPercentage(){
    const vlera = Number(document.getElementById("vlera").value);
    const perqindja = Number(document.getElementById("perqindja").value);
    let rezultatiPerqindjes =  (vlera/100)*perqindja;
    console.log(rezultatiPerqindjes);
    document.getElementById("rezultatiPerqindjes").value=rezultatiPerqindjes;
    document.getElementById("rezultatiPerqindjes").style.color="red";
}
//funksioni per gjetjen e perqindjes
function getPercentageFromValue(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const percentage=Number(document.getAnimations('percentage').value);
    let resultOfPercentage=(num1*100)/num2+"%";
    console.log(resultOfPercentage);
    document.getElementById("resultOfPercentage").value=resultOfPercentage;
}