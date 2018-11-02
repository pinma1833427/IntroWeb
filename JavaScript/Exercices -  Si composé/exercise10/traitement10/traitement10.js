function btnCalculer_onclick()
{
    var Age, Categorie;

    Age = parseInt(document.getElementById("txtAge").value);

    if((Age >= 6) && (Age <=8))
    {
        Categorie = "Poussin";
    }
    if((Age >= 9) && (Age <=10))
    {
        Categorie = "Pupille";
    }
    if((Age >= 11) && (Age <=12))
    {
        Categorie = "Minine";
    }
    if(Age >= 13)
    {
        Categorie = "Cadet";
    }
    document.getElementById("lblMessage").innerHTML = "l'enfant fait partie de la catégorie: " + Categorie;
}