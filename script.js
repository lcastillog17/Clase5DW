let add=document.querySelector("#add");
let substract=document.querySelector("#substract");
//console.log(add, substract);


add.addEventListener("click", function () {
    //alert("le diste click a sumar");
    let output=document.querySelector("#output");

    if(parseInt(output.innerText)<10){
    let result=parseInt(output.innerText)+1
    output.innerText=result;
    }else{
        alert("No se puede sumar mas de 10")
    }
});

substract.addEventListener("click", function () {
    //alert("le diste click a sumar");
    let output=document.querySelector("#output");
    if(parseInt(output.innerText)>0){
    let result=parseInt(output.innerText)-1
    output.innerText=result;
    }else{
        alert("No se puede restar menos de 0")
    }
});
    