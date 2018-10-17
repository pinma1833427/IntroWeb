function btnCalculer_onclick()
{ 
 	var argentCan, tauxChange = 0.71, euro;


 	argentCan = parseFloat(document.getElementById("txtargentCan").value);
 	euro = (argentCan * tauxChange);

    console.log("Votre totale en euro est de: " + euro);
}