//sirge joon
function sirgeJoon(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200); //lõppunkt
        t.stroke();
    }
}
function puhasta(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
            t.clearRect(0,0,300,400);
    }
}
//kolmnurk
function kolmnurk(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.fillStyle="green"; //taust
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200);
        t.lineTo(50,200);
        t.lineTo(50,50); //lõpppunkt
        t.stroke();
        t.fill();
    }
}
function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");

    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        t.fillStyle="olive";
        t.fillRect(100,50,laius.value,korgus.value);
    }
}
function ring(){
    const tahvel=document.getElementById("tahvel");
    const r=document.getElementById("raadius");
    const varv=document.getElementById("varv")
    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        t.fillStyle=varv.value;
        t.arc(100,50,r.value,0,2*Math.PI,true); //alguspunk - x, y, laius, kõrgus
        t.fill();
    }
}
function smileyhead(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle="yellow";
        t.arc(150,200,90,0,2*Math.PI,true); //alguspunk - x, y, laius, kõrgus
        t.fill();
    }
}
function smileynose(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        t.fillStyle="#ebf06c";
        t.fillRect(135,200,30,59);
    }
}
function smileymouth(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="black";
        t.lineWidth = 2;
        t.moveTo(100, 270); //alguspunkt
        t.lineTo(200,270); //lõppunkt
        t.stroke();
    }
}
function smileyeye() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "white";
        t.arc(190, 160, 20, 0, 2 * Math.PI, true); //alguspunk - x, y, laius, kõrgus
        t.fill();
    }
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "white";
        t.arc(110, 160, 20, 0, 2 * Math.PI, true); //alguspunk - x, y, laius, kõrgus
        t.fill();
    }
}
function smileyeyepupils(){
    const tahvel=document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "black";
        t.arc(190, 170, 5, 0, 2 * Math.PI, true); //alguspunk - x, y, laius, kõrgus
        t.fill();
    }
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "black";
        t.arc(110, 170, 5, 0, 2 * Math.PI, true); //alguspunk - x, y, laius, kõrgus
        t.fill();
    }
}
function smileyears(){

    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        t.fillStyle="#ebf06c";
        t.fillRect(35,160,30,80);
    }
    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        t.fillStyle="#ebf06c";
        t.fillRect(235,160,30,80);
    }
}
function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        const fail=new Image();
        fail.src="https://thumbs.dreamstime.com/b/single-cheerful-emoji-open-arms-displayed-transparent-background-emoji-features-friendly-welcoming-expression-341241999.jpg";
        fail.onload=()=>{
            t.drawImage(fail, 50, 50, 100, 100)
        }
    }
}
function smile(){
    smileyhead();
    smileyeye();
    smileynose();
    smileyeye();
    smileyears();
    smileymouth();
    smileyeyepupils();
}