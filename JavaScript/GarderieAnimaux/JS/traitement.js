function btnCalculer_onclick()
{ 
 	var NbJours, Toilet = 0, Vet, Animal,  Totale , Tarif;

 	Vet = document.getElementById("lstVeterinaire").value;
	NbJours = parseInt(document.getElementById("txtNbreJours").value);

	if(document.getElementById("radChien").checked == true)
	{
		Tarif = 18.50;
		Animal = "chien";
	}
	else
	{
		Tarif = 16.95;
		Animal = "chat";
	}
	if(document.getElementById("chkServ").checked == true)
	{
		Toilet = 5;
	}
	Totale = ((Tarif * NbJours) + Toilet) *1.15;
	console.log("Le vétérinaire " + Vet + " va s'occuper de votre " + Animal + " pour un totale de: " + Totale + "$");
}