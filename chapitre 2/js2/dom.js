//Selection des elements du dom : 
var lienElt = document.getElementById("lien");
console.log(lienElt);
var titresElt =  document.getElementsByClassName("titre");
console.log(titresElt);
for (let i = 0; i < titresElt.length; i++) {
    console.log(titresElt[i]);   
}
var paraElts = document.getElementsByTagName("p");
for (let i = 0; i < paraElts.length; i++) {
    console.log(paraElts[i]);    
}
var premierTitre = document.querySelector("h1");
    console.log(premierTitre);
var bodyElt = document.getElementById("contenu");
//Affichage du contenu textuel
console.log(bodyElt.textContent);
// Affichage du contenu html
console.log(bodyElt.innerHTML);
premierTitre.id = "titre1";
premierTitre.setAttribute("id", "titre2");
premierTitre.classList.add("premierTitre");
