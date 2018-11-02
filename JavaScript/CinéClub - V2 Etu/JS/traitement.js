function btnCalculer_onclick()
{
    var Age, Prix;

    Prix = parseInt(document.getElementById("txtBasePrix").value);
    Age = parseInt(document.getElementById("txtAge").value);

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
    document.getElementById("lblMessage").innerHTML = "Le prix d'un billet du midi pour un spectateur de 16 ans est de: " + Prix + "$";
}