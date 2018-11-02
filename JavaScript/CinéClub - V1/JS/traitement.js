function btnCalculer_onclick()
{
    var Age, Prix;

    Prix = parseInt(document.getElementById("txtBasePrix").value);
    Age = parseInt(document.getElementById("txtAge").value);

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
        if (document.getElementById("radMidi").checked == true)
        {
            Prix = Prix * 0.7;
        }
    }
    console.log("Le prix est de: " + Prix + "$");
}