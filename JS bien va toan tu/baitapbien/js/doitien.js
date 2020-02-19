


function convert123() {
    let x1=document.getElementById("select1").value;
    let x2=document.getElementById("select2").value;


    var tigia;


    if ((x1=vn) && (x2=usa)){
        tigia=1/23000;
    }
    if((x1=vn) && (x2=euro)){
        tigia=1/25000;
    }
    if((x1=lao) && (x2=euro)){
        tigia=0.5/25000;
    }
    if((x1=vn) && (x2=usa)){
        tigia=0.5/23000;
    }

    var inputAmount=document.getElementById("amount").value;
    var amount=parseInt(inputAmount);
    var  result;

    result=amount*tigia;
    document.getElementById("result").innerHTML= result ;
}