function btnCalculer_onclick()
{ 
 	var Num, Jour;

 	Num = parseInt(document.getElementById("txtNumSem").value);

 	if (Num <= 1)
 	{
 	    Jour = "Lundi";
    }
    else if (Num <= 2)
    {
        Jour = "Mardi";
    }
    else if (Num <= 3)
    {
        Jour = "Mercredi";
    }
    else if (Num <= 4)
    {
        Jour = "Jeudi";
    }
    else if (Num <= 5)
    {
        Jour = "Vendredi";
    }
    else if (Num <= 6)
    {
        Jour = "Samedi";
    }
    else if (Num <= 7)
    {
        Jour = "Dimanche";
    }
    else
    {
 	    Jour = "Mauvaise saisi";
    }

    document.getElementById("lblMessage").innerHTML = "Le jour est: " + Jour;
}