// déclaration des variables
var entete = document.getElementById("entete");
var presentation = document.getElementById("presentation");
var competences = document.getElementById("competences");
var savoir = document.getElementById("savoir");
var realisations = document.getElementById("realisations");
var experience = document.getElementById("experience");
var exp = document.getElementById("exp");
var formation = document.getElementById("formation");
var diplomes = document.getElementById("diplomes");
var contact = document.getElementById("contact");
var formulaire = document.getElementById("formulaire");


// ouverture/fermeture des catégories  au clic
competences.addEventListener("click",function(){
    if (savoir.style.display == "none"){
        absence();
        competences.style.display = "block";
        savoir.style.display = "block";        
    } else{
        savoir.style.display = "none"; 
        presence();
    }  
});

experience.addEventListener("click",function(){
    if (exp.style.display == "none"){
        absence();
        experience.style.display = "block";
        exp.style.display = "block"; 
    } else{
        exp.style.display = "none"; 
        presence();
    }  
});

formation.addEventListener("click",function(){
    if (diplomes.style.display == "none"){
        absence();
        formation.style.display = "block";
        diplomes.style.display = "block"; 
    } else{
        diplomes.style.display = "none"; 
        presence();
    }    
});

contact.addEventListener("click",function(){
    if (formulaire.style.display == "none"){
        absence();
        contact.style.display = "block";
        formulaire.style.display = "block"; 
    } else{
        formulaire.style.display  = "none";
        presence();       
    }    
});

function presence (){
    presentation.style.display = "block";
    competences.style.display = "block";
    realisations.style.display = "block";
    experience.style.display = "block";
    formation.style.display = "block";
    contact.style.display = "block";
}

function absence(){ 
    presentation.style.display = "none";
    competences.style.display = "none";
    savoir.style.display  = "none"; 
    realisations.style.display = "none";
    experience.style.display = "none";
    exp.style.display = "none";
    formation.style.display = "none";
    diplomes.style.display = "none";
    contact.style.display = "none";  
    formulaire.style.display = "none"; 
}