var TabJoueur = new Array(4), TabPoints = new Array(4), Cpt = 0;


function btnAjouter_onclick()
{
    TabJoueur[Cpt] = document.getElementById("txtNom").value;
    TabPoints[Cpt] = document.getElementById("txtPoints").value;
    Cpt++;
    document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur " + Cpt;

    if(Cpt == 4)
    {
        document.getElementById("btnRechercher").disabled = false;
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
        document.getElementById("btnAjouter").disabled = true;
    }
}
function btnMoyenne_onclick()
{
    Moyenne = FMoyenne();
    document.getElementById("lblReponse").innerHTML = "La moyenne est de: " + Moyenne;
}
function FMoyenne()
{
    var i, Moyenne = 0;
    for(i = 0; i < 3; i++)
    {
        Moyenne += TabPoints[i];
    }
    Moyenne = Moyenne / 4;
    return  Moyenne;
}

function btnTrouverMeilleur_onclick()
{
    var Meilleur = "", MeilleurPts = 0;
    MeilleurPts = TabPoints[FMeilleur(0)];
    Meilleur = TabJoueur[FMeilleur(0)];
    document.getElementById("lblReponse").innerHTML = "Le meilleur est " + Meilleur + " avec " + MeilleurPts + " nombre de points";
}
function FMeilleur(MeilleurPts)
{
    var j, i;
    for(i =0; i< TabJoueur.length;i++)
    {
        if(TabPoints[i] > MeilleurPts)
        {
            j = i;
        }
    }
    return j;
}


function btnTrouverPire_onclick()
{
    var Pire = "", PirePts = 0;
    PirePts = TabPoints[FPire(0)];
    Pire = TabJoueur[FPire(0)];
    document.getElementById("lblReponse").innerHTML = "Le pire est " + Pire + " avec " + PirePts + " nombre de points";
}
function FPire(PirePts)
{
    var i, j;
        for(i =0; i< TabJoueur.length;i++)
    {
        if(TabPoints[i] < PirePts)
        {
            j = i;
        }
    }
    return j;
}


function btnRechercher_onclick()
{
    var i = 0, Recherche = "";
    Recherche = document.getElementById("txtNom").value;
    while(Recherche !== TabJoueur[i])
    {
        i++
    }
    document.getElementById("lblReponse").innerHTML = "Le joueur " + Recherche + " à " + TabPoints[i] + " points.";
}