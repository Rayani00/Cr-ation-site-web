alert("Bonjour et Bienvenue parmis nous ")

//variables :
var nom="Lotfi" //chaîne de caractéres 
var age=19 //entier
var moyenne=13.28 //réel
var admis //Booléen
var mention
console.log("Je m'appelle "+nom+", j'ai "+age+", j'ai "+moyenne+" de moyenne et je suis admis.");

//conditions :
//1-if-else :
if (moyenne<10) {
    admis=false
}
else {
    admis=true
}
console.log(admis)
if (moyenne<10) {
    mention="Rien"
}
else if (moyenne>=10 && moyenne<=12) {
    mention="Moyen"
}
else if (moyenne>=12 && moyenne<14) {
    mention="Assez Bien"
}
else if (moyenne>=14 && moyenne<16) {
    mention="Bien"
}
else if (moyenne>=16 && moyenne<18) {
    mention="Trés Bien"
}
else if (moyenne>=18 && moyenne<=20) {
    mention="Excellent"
}
console.log(mention);
//test par rapport au test et a la valeur ===
//2-switch : 
var nbr=Number(prompt("Saisissez un nombre de 1 à 7"))
console.log(nbr);
switch (nbr) {
    case 1:console.log("Dimanche");
    
         break;
    case 2: console.log("Lundi");
    
         break;
    case 3: console.log("Mardi");
    
         break;
    case 4: console.log("Mercredi");
    
         break;
    case 5: console.log("Jeudi");
    
         break;
    case 6: console.log("Vendredi");
    
         break;
    case 7: console.log("Samedi");
    
         break;
        

    default:
        break;
}

//Boucles : 
//1-for :
for (let i = 0; i < 10; i++) {
console.log("Je suis dans la Boucle For i=" +i);   
}
i=0
//2-while :
while (i<10) {
    console.log("Je suis dans la Boucle While i=" +i);

    i=i+1
}

//Tableaux :
var etudiants=["Djamila", "Feriel", "Warda", "Leticia", "Mazigh", "Lotfi", "Sonia", "Lilia", "Sarah", "Thumar"]
for (let i = 0; i < etudiants.length; i++) {
console.log(etudiants[i]);   
}

//Fonctions :
//1-fonctions sans retour :
function Affichage (x) {
    console.log(x);
}
Affichage("Bonjour")
//2-fonctions avec retour :
function somme(a,b){
    return a+b;
}
Affichage(somme(5,5));

//Objets:
var etudiant = {
    nom : "OUAISSA",
    prenom : "Lotfi",
    age : 19,
    notes :[19.5,20],
    moyenne : (note1,note2)=>{ 
        return (note1+note2)/2;
    }
}
var decision 
if ((etudiant.moyenne(etudiant.notes[0],etudiant.notes[1])>=10)) {
    decision = "Félicitations, vous êtes Admis"
} 
  else {
    decision = "vous êtes Ajourné"
}

console.log("Je m'appelle " +etudiant.nom+" " +etudiant.prenom +", j'ai " +etudiant.age +"ans, j'ai " +etudiant.notes[0] +" et "+etudiant.notes[1] +", et ma moyenne est de : " +etudiant.moyenne(etudiant.notes[0],etudiant.notes[1])+"." + "  " +decision);
 