function btnCalculer_onclick()
{
    if (ValideChampsObligatoire() === true)
    {
        Saisie();
    }

}

function Calculer(Nbr1, Nbr2, Operation)
{
    var Reponse =0;
    switch (Operation)
    {
        case "+":
            Reponse = Nbr1 + Nbr2;
            break;
        case "-":
            Reponse = Nbr1 - Nbr2;
            break;
        case "*":
            Reponse = Nbr1 * Nbr2;
            break;
        case "/":
            Reponse = Nbr1 / Nbr2;
            break;
        default:
            Reponse = "Mauvaise operation";
            break;
    }
    return Reponse;
}

function Saisie()
{
    var Nbr1 = 0, Nbr2 = 0, Operation = "", Reponse = 0;
    Nbr1 = parseInt(document.getElementById("txtNbre1").value);
    Nbr2 = parseInt(document.getElementById("txtNbre2").value);
    Operation = document.getElementById("txtOperateur").value;
    Reponse = Calculer(Nbr1, Nbr2 , Operation);
    document.getElementById("lblMessage").innerHTML = "La reponse est: " + Reponse;
}

function ValideChampsObligatoire()
{
    var i, ChampRempli = true, TabId = ["txtNbre1", "txtNbre2", "txtOperateur"];

    for (i = 0; i < TabId.length; i++)
    {
        if (ValideExiste(TabId[i]) === false)
        {
            ChampRempli = false;
            return ChampRempli;
        }
    }
    return ChampRempli;
}

function ValideExiste(NomId)
{
    var ContientText = true;

    if(document.getElementById(NomId).value === "")
    {
        ContientText = false;
        document.getElementById(NomId).style.backgroundColor = "Red";
    }
    else
    {
        document.getElementById(NomId).style.backgroundColor = "White";
    }
    return ContientText;
}


