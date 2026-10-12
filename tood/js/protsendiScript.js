function numbriprotsendid(){
    let vastus4=document.getElementById("vastus4");
    let protsent=document.getElementById("protsent");
    let number=document.getElementById("number")



    vastus4.innerHTML=protsent.value + "%" + " arvust " + number.value + " on " + ((number.value*protsent.value)/100).toFixed(2);
}