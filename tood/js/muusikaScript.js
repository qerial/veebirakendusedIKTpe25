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

function Millisedraadiojaamad() {
    let text = document.getElementById("text").value;
    let answer5 = document.getElementById("answer5");

    answer5.innerHTML = "Sinu nimetatud jaamad: " + text;
    answer5.style.color = "teal";

    return text;
}
function MuusikaValik() {
    let music = document.getElementById("music").value;
    let answer6 = document.getElementById("answer6");

    answer6.innerHTML = "Sinu vastus: " + music;
    answer6.style.color = "#E30B5C";

    return music;
}


function tervitus(){
    let vastus7=document.getElementById("vastus7");
    let muusika = muusikaValik();
    let nimi = Musicthought();
    let tund = Mitutundi();
    let valik = raadiokuulamine();
    let raadiojaam = raadiokuulamine();
    let stiil = MuusikaValik();



    vastus7.innerHTML="Valitud muusikud on "+muusika+"<br>"
        +"Arvamus muusika kuulamisest koolis: "+nimi+"<br>"
        +"Kuulad päevas nii palju tunde muusikat: "+tund+"<br>"
        +"Kas sa kuulad raadiot: "+valik+"<br>"
        +"Nimetatud raadiojaamad: "+raadiojaam+"<br>"
        +"Meeldivad muusika stiilid: "+stiil;
    vastus7.style.backgroundColor="yellow";
}


function Puhasta() {
    document.getElementById("answer1").innerHTML = "";
    document.getElementById("answer2").innerHTML = "";
    document.getElementById("answer3").innerHTML = "";
    document.getElementById("answer4").innerHTML = "";
    document.getElementById("answer5").innerHTML = "";
    document.getElementById("answer6").innerHTML = "";
    document.getElementById("vastus7").innerHTML = "";

    document.getElementById("nublu").checked = false;
    document.getElementById("Smilers").checked = false;
    document.getElementById("Helladvelled").checked = false;
    document.getElementById("TommyCash").checked = false;
    document.getElementById("viismiinust").checked = false;

    document.getElementById("MusicToughts").value = "";
    document.getElementById("range").value = "";
    document.getElementById("text").value = "";

    document.getElementById("jah").checked = false;
    document.getElementById("ei").checked = false;

    document.getElementById("music").value = "";
}

function raadiokuulamine() {
    let jah = document.getElementById("jah");
    let smiley = document.getElementById("smiley");

    if (jah.checked) {
        smiley.innerHTML = '<img src="smiley.png" alt="Smiley" width="150">';
    } else {
        smiley.innerHTML = "";
    }
}