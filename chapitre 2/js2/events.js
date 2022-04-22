//Gestion d'evts:
//La souris (Mouse):
var button = document.getElementById('btn')
var parag =document.getElementById('para')
var lien = document.getElementById('interdit')
button.addEventListener("click",(e)=>{
    console.log(e.type+" "+ e.target.textContent);       
})
//Gestion du click 
function getButton(a) {
    switch (a) {
        case 0:
           return "Gauche" 
        case 1 :
            return "Droite"
        case 2:
            return "Milieu"
        default:
        console.log("ERREUR");
        
            break;
    }
}
function infoSouris(e) {
  console.log("Event: " + e.type) 
  console.log("Client X : "+ e.clientX)
  console.log("Client Y : "+ e.clientY);
  console.log("Boutton : " + getButton(e.button))
    
}
btn.addEventListener("click", infoSouris);
btn.addEventListener('mousedown',infoSouris);
btn.addEventListener('mouseup',infoSouris); //ordre d'excution n'est pas important parceque tant que l'evenement n'a pas eu lieu
//Evenements relatifs au clavier :
document.addEventListener('keypress',(e)=>{
console.log('La touche:'+String.fromCharCode(e.charCode));
})
function infoClavier(e){
    console.log("Type : "+e.type+"\nLa touche numéro :"+e.keyCode);
}
document.addEventListener('keypress',infoClavier)
document.addEventListener('keydown',infoClavier)
document.addEventListener('keyup',infoClavier)
//Stop propagation :
btn.addEventListener('click',(e)=>{
console.log('vous avez cliqué sur le bouton');
e.stopPropagation();
})
parag.addEventListener('click',()=>{
    console.log('vous avez cliqué sur le paragraphe');
    })
document.addEventListener('click',()=>{
    console.log('vous avez cliqué sur le document');
        })
lien.addEventListener('click',(e)=>{
    alert("Restez ici c'est mieux")
    e.preventDefault()
})