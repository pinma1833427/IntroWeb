function btnCalculer_onclick()
{
    var Nbr1, Nbr2, Signe;


    if(((Nbr1 >= 0) && (Nbr2 >=0)) || ((Nbr1 <=0) && (Nbr2 <= 0)))
    {
        Signe = "Positif";
    }
    else
    {
        Signe = "Négatif";
    }
    document.getElementById("lblMessage").innerHTML = "Votre signe est: " + Signe;
}