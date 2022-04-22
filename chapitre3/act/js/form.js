var form = document.getElementById("form");
// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
	var nom = form.elements.nom.value;
	var prenom = form.elements.prenom.value;
	var email = form.elements.email.value;
	var tel = form.elements.tel.value;
	var nbr = form.elements.nbr.value;
	var date = form.elements.date.value;
	var a = "";
	switch (form.elements.heure.value) {
		case "12:00":
			a = "heure de reservation: 12:00";
			break;
		case "12:15":
			a = "heure de reservation: 12:15";
			break;
		case "12:30":
			a = "heure de reservation: 12:30";
			break;
		case "19:00":
			a = "heure de reservation: 19:00";
			break;
		case "19:15":
			a = "heure de reservation: 19:15";
			break;
		case "19:30":
			a = "heure de reservation: 19:30";
			break;
		case "19:45":
			a = "heure de reservation: 19:45";
			break;
		case "20:00":
			a = "heure de reservation: 20:00";
			break;
		case "20:15":
			a = "heure de reservation: 20:15";
			break;
		case "20:30":
			a = "heure de reservation: 20:30";
			break;
		case "20:45":
			a = "heure de reservation: 20:45";
			break;
		case "21:00":
			a = "heure de reservation: 21:00";
			break;
		default:
			a = "erreur";
			break;
	}
	confirm("Confirmez vous ces informations?" + "\nVotre nom: " + nom + "\nVotre prenom: " +
		prenom + "\nVotre email: " + email + "\nVotre numero de telephone: " + tel +
		"\nNombre de personnes: " + nbr + "\nDate de reservation: " + date + "\n" + a);
	e.preventDefault();
});
