// declaration des variables
var menu = document.getElementById("menu");
var liens = document.getElementById("liens");



// ouverture menu
menu.addEventListener("click",function(){
    if( liens.style.display == "none"){
        liens.style.display = "block";
    } else {
        liens.style.display = "none";
    }
});