function btnCalculer_onclick()
{ 
 	var MoyKm, totalKm;

    MoyKm = parseFloat(document.getElementById("txtMoyKm").value);
    totalKm = (MoyKm * 60);

    console.log("Votre moyenne de km en 5 ans est de: " + totalKm);
}