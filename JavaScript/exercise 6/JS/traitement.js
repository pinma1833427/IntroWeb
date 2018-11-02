function btnCalculer_onclick()
{ 
 	var NbrBillet1, NbrBillet5, NbrBillet10, NbrBillet25, Totale;

 	NbrBillet1 = parseInt(document.getElementById("txtNbrBillet1").value);
    NbrBillet5 = parseInt(document.getElementById("txtNbrBillet5").value);
    NbrBillet10 = parseInt(document.getElementById("txtNbrBillet10").value);
    NbrBillet25 = parseInt(document.getElementById("txtNbrBillet25").value);

 	Totale = (NbrBillet1 + NbrBillet5 + NbrBillet10 + NbrBillet25) / 10;

 	document.getElementById("lblMessage").innerHTML = "Votre totale est de" + Totale + "¢";
}