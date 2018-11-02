function btnCalculer_onclick()
{ 
 	var Nbr1, Nbr2, Operation, Reponse;

 	Nbr1 = parseInt(document.getElementById("txtNbre1").value);
    Nbr2 = parseInt(document.getElementById("txtNbre2").value);
    Operation = document.getElementById("txtOperateur").value;

    if (Operation <= "+")
    {
        Reponse = Nbr1 + Nbr2;
    }
    else if (Operation <= "-")
    {
        Reponse = Nbr1 - Nbr2;
    }
    else if (Operation <= "*")
    {
        Reponse = Nbr1 * Nbr2;
    }
    else if (Operation <= "/")
    {
        Reponse = Nbr1 / Nbr2;
    }
    else
    {
        Reponse = "Mauvaise operation"
    }

    document.getElementById("lblMessage").innerHTML = "La reponse est: " + Reponse;
}