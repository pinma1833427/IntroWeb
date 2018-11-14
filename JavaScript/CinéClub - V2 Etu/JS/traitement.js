function btnCalculer_onclick()
{
    var Age, Prix, MiSession, Midi;

    Prix = parseInt(document.getElementById("txtBasePrix").value);
    Age = parseInt(document.getElementById("txtAge").value);
    Calcule();
    document.getElementById("lblMessage").innerHTML = "Le prix d'un billet du midi pour un spectateur de 16 ans est de: " + Prix + "$";
}

function Calcule()
{
    if ((document.getElementById("chkMiSession").checked == true) && (document.getElementById("lstOptions").value == "Halloween"))
    {
        if(Age <= 16)
        {
            if (document.getElementById("radMidi").checked == true)
            {
                Prix = Prix * 0.4;
            }
            else
            {
                Prix = Prix * 0.6;
            }
        }
        else
        {
            Prix = Prix * 0.7;
        }
    }
    return Prix;
}

function lstOptions_onchange()
{
    var film;

    film = document.getElementById("lstOptions").value;
    document.getElementById("imgAct").src="img/" + film + ".jpg";

}
