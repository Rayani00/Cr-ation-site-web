var form=document.getElementById("formulaire");
var btn=document.getElementById("btn");
form.addEventListener("submit",function (e) {
   var psudo= form.elements.psudo.value;
   var msg= form.elements.msg.value;
    console.log(psudo);
    console.log(msg);
    var divElt =document.createElement("div");
    divElt.id="commentaire";
    var psudoElt =document.createElement("h2");
    psudoElt.textContent=psudo;
    divElt.appendChild(psudoElt);
    var msgElt =document.createElement("p");
    msgElt.textContent=msg;
    divElt.appendChild(msgElt);
    var dateElt =document.createElement("blockquote");
    var d = new Date();
	var mois=d.getMonth()+1;
    dateElt.textContent="Le : "+d.getDate()+"/"+mois+"/"+d.getFullYear()+" à "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    divElt.appendChild(dateElt);
    document.getElementById("avis").appendChild(divElt);
    e.preventDefault();
})
