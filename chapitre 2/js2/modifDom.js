//Changement contenu HTML
var listItem = document.getElementById("plats");
listItem.innerHTML +='<li id="brownies"> Brownies </li>'
//Changement contenu textuel 
var headerItem = document.querySelector('h1');
headerItem.textContent += 'de notre restaurant';
//Ajouter un element 
var listItem2 = document.createElement('li');
listItem2.textContent = 'Lasagnes';
listItem2.id = 'lasagnes';
document.getElementById('plats').appendChild(listItem2);

