var Vet, TauxHoraire = 0, Toilet = 0, Tarif = 0, Animal, NbrHeure = 0, NbJours = 0, Totale = 0;

function btnCalculer_onclick()
{
 	ChoisirVet();
 	AnimalType();
	CalculerRabais();
	document.getElementById("lblMessage").innerHTML = Vet + " va s'occuper de votre " + Animal + " pour " + NbJours + " jours et avec un totale de: " + Totale + " $ ";
}
function CalculerRabais()
{
    NbJours = parseInt(document.getElementById("txtNbreJours").value);
    Totale = ((Tarif * NbJours) + (TauxHoraire*NbrHeure) + Toilet);
    if((NbJours >= 5) && (NbJours <= 10))
    {
        Totale = Totale * 0.95;
    }
    else if ((NbJours >= 10) && (NbJours <= 30))
    {
        Totale = Totale * 0.90;
    }
    else if (NbJours > 30)
    {
        Totale = Totale * 0.85;
    }
    Totale = Totale *1.15;
}
function AnimalType()
{
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
}
function ChoisirVet()
{
    Vet = document.getElementById("lstVeterinaire").value;
    switch (Vet)
    {
        case "Audrey Bouchard":
            TauxHoraire = 25;
            break;
        case "Stéphane Tremblay":
            TauxHoraire = 35;
            break;
        case "Maxime Simard":
            TauxHoraire = 40;
            break;
        case "Mélissa Caron":
            TauxHoraire = 45;
            break;
    }
}
function btnAfficherAnimal_onclick()
{
	if (document.getElementById("radChien").checked == true)
	{
        document.getElementById("ImgAct").src = "img/chien.png"
	}
	else
	{
        document.getElementById("ImgAct").src = "img/chat.png"
	}
}
