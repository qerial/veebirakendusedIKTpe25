function kellanupp(){
    const  now = new Date();


    const paev = now.getDate();//päev
    const kuu = now.getMonth() + 1; //kuu
    const aasta = now.getFullYear(); //aasta
    const tunnid= now.getHours(); //tunnid
    const minutid= now.getMinutes(); //minutid
    let vastus=document.getElementById("vastus");

    vastus.innerHTML=
        'Tänane kuupäev on ' + paev + "." + kuu + "." + aasta + '<br>' +
        'Kellaaeg on '+tunnid + ':' + minutid;
}
function SunnipaevaniNupp(){
    const sunnipaev = new Date(2027, 7, 28);
    const tana= new Date();

    const vahe=tana.getTime() - sunnipaev.getTime();
    const paevad=vahe/(1000 * 60 * 60* 24 * -1)

    let sunnipaevastus=document.getElementById("sunnipaevastus");

    sunnipaevastus.innerHTML="Minu sünnipävani on: " + paevad.toFixed() + " päeva."
}