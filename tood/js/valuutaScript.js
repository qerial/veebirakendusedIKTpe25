function valuutaKalk(){
    let vastus3=document.getElementById("vastus3");
    let euro=document.getElementById("euro");
    let valuuta=document.getElementById("valuuta")

    const dollar=1.12;
    const juann=7.4992;
    const rub= 94.05

    if(valuuta.value=="dollar"){

        vastus3.innerHTML=euro.value+"€ = "+
            (euro.value*dollar).toFixed(2)+ "$";
    }    if(valuuta.value=="juann"){

        vastus3.innerHTML=euro.value+"€ = "+
            (euro.value*juann).toFixed(2)+ "¥";
    }if(valuuta.value=="rub"){

        vastus3.innerHTML=euro.value+"€ = "+
            (euro.value*rub).toFixed(2)+ "₽";
    }

}