var titre = document.querySelector('.titre');

//Set time out 
setTimeout(() => {
    titre.style.backgroundColor = 'red';
}, 5000);

var spanElt = document.getElementById('cpt');
function diminuercompteur() {
    let compteur = Number(spanElt.textContent);
    if (compteur>1) {
      spanElt.textContent = compteur - 1 ;
    }
    else{
        spanElt.textContent = " Bonne année  ! "
        clearInterval(Interval1)
    }
}
var Interval1 = setInterval(diminuercompteur, 1000)
var paragraphe = document.getElementById('para');
console.log(paragraphe.style.backgroundColor);
var stylePara = getComputedStyle(paragraphe);
console.log(stylePara.backgroundColor);
