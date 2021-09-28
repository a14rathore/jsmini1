var inputbox=document.getElementById("inputbox");
var btn=document.getElementById("button1");
var reset=document.getElementById("reset");
var h1=document.getElementById("changename");
var b=document.querySelector("body");


btn.addEventListener("click",function name(){
    h1.textContent=inputbox.value;
    document.body.style.backgroundImage="url('./wall5.jpg')";
})
reset.addEventListener("click",function (){
    h1.textContent="GOOGLE.COM";
    document.body.style.backgroundImage="url('./wall12.jpg')";
    inputbox.value="";

})

