function muusikaValik(){
    let answer1=document.getElementById("answer1");
    let nublu=document.getElementById("nublu");
    let Smilers=document.getElementById("Smilers");
    let Helladvelled=document.getElementById("Helladvelled");
    let TommyCash=document.getElementById("TommyCash");
    let viismiinust=document.getElementById("viismiinust");

    let muusika="";
    if(nublu.checked){
        muusika +=nublu.value+ ',  ';
    }    if(Smilers.checked){
        muusika +=Smilers.value+ ',  ';
    }    if(Helladvelled.checked){
        muusika +=Helladvelled.value+ ',  ';
    }    if(TommyCash.checked){
        muusika +=TommyCash.value+ ',  ';
    }
    if(viismiinust.checked){
        muusika +=viismiinust.value+ ',  ';
    }
    if (muusika==""){
        muusika="sa ei kuula neid";
    }
    answer1.innerHTML=muusika;
    return muusika;
}
function Musicthought(){
    let Musicthoughtt=document.getElementById("MusicToughts")
    let answer2 =document.getElementById("answer2")
    //innerHTML -düminaamililiselt genereerib teksti html'ina
    answer2.innerHTML="Sinu arvamus: "+ Musicthoughtt.value;
    answer2.style.color="blue";
    return Musicthoughtt.value;

}

function raadiokuulamine(){
    let answer4=document.getElementById("answer4")
    let jah=document.getElementById("jah")
    let ei=document.getElementById("ei")


    //radio valikud
    let arvamus="";
    if(jah.checked){
        arvamus=jah.value;
    }
    else if(ei.checked){
        arvamus=ei.value;
    }
    else{
        arvamus="palun vali kas jah või ei";
    }
    answer4.innerHTML="Valitud vastus on " +arvamus;
    answer4.style.color="green";
    return arvamus;
}
function Mitutundi(){
    let range=document.getElementById("range")
    let answer3 =document.getElementById("answer3")
    answer3.innerHTML="kuulad muusikat "+ range.value + " tundi päevas."
    answer3.style.color="brown";
    return range.value;
}
