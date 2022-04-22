var pseudo = document.getElementById('pseudo')
var aidePseudo= document.getElementById('aidePseudo')
var mdp = document.getElementById('mdp')
var aideMdp= document.getElementById('aideMdp')
var courriel = document.getElementById('courriel')
var aideCourriel = document.getElementById('aideCourriel')
var  confirmation = document.getElementById("confirmation")
var abonnement = document.getElementsByName("abonnement")
var nationalite = document.getElementById("nationalite")
var form = document.querySelector("form")

pseudo.addEventListener('focus',()=>{
aidePseudo.textContent="Entrez votre pseudo"
})
pseudo.addEventListener('blur',()=>{
    aidePseudo.textContent=""
    })

mdp.addEventListener('input', (e)=>{
var pwd = e.target.value
var qualite = 'Faible'
var couleur = 'red'
if (pwd.length>=8) {
    qualite = 'Fort'
    couleur ='green'
} else if (pwd.length>=4 && pwd.length<8) {
    qualite = 'Moyen'    
    couleur = 'orange'   
} else if (pwd.length===0) {
    qualite =''
}
aideMdp.textContent = qualite
aideMdp.style.color = couleur
})

courriel.addEventListener('blur', (e)=>{
    let email= e.target.value
    if (email.indexOf('@')===-1) {
        aideCourriel.textContent = "Format invalide"
        aideCourriel.style.color = "red"
    }
    else {
        aideCourriel.textContent=""
    }
})

confirmation.addEventListener("change",(e)=>{
    console.log(e.target.checked);
    
})

for (let i = 0; i < abonnement.length; i++) {
    abonnement[i].addEventListener("change",(e)=>{
        console.log(e.target.value);
        
    })
    
}

nationalite.addEventListener("change",(e)=>{
console.log(e.target.value);

})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var pseudo = form.elements.pseudo.value;
    var emails = form.elements.courriel.value;
    var confie = form.elements.confirmation.checked;
    var confirmationSentence = confie?"Vous avez choisi la confirmation par email" : "Vous navez pas choisi la confirmation par email";
    var abnt = form.elements.abonnement.value;
    var abntSenetence = " ";
     switch (abnt) {
        case "abonewspromo":
            abntSenetence = " vous avez choisi abonewspromo";
        break;

        case "abonews":
            abntSenetence = " vous avez choisi abonwes";
        break;

        case "abonrien":
            abntSenetence = " vous avez choisi abonrien";
        break;
    
        default:
            break;}
      var nat = form.elements.nationalite.value;
      var natSentence = "";
      switch (nat) {
        case "FR":
            natSentence = "France";
        break;

        case "SUI":
            natSentence = "Suisse";
        break;

        case "BE":
            natSentence = "Belgique";
        break;

        case "XX":
            natSentence = "Autre";
        break;
    
        default:
            break;}

     confirm("Pseudo: "+pseudo+"\nmot de passe: *****\nemail: "+emails+"\n"+confirmationSentence+"\n"+abntSenetence+"\n"+natSentence)
})
 