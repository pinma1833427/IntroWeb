function btnCalculer_onclick()
{ 
 	var PoidsLivre, Kg;  //déclaration des variables
	
	PoidsLivre = parseFloat(document.getElementById("txtPoids").value);   //saisir poids
	Kg = (PoidsLivre/2.2); //traitement

 	console.log("Votre poids en Kg est: " + Kg);   //affichage dans l'outil de débuggage du navigateur.
}