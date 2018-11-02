function btnCalculer_onclick()
{ 
 	var NbEtu, NbNorm, NbSenior, NbBillets, Total;  //déclaration des variables
	
	NbEtu = parseInt(document.getElementById("txtBilletEtu").value);
    NbSenior = parseInt(document.getElementById("txtBilletSenior").value);
    NbNorm = parseInt(document.getElementById("txtBilletNorm").value);
    NbBillets = NbNorm +  NbEtu + NbSenior;
    Total = (NbNorm * 20) + (NbEtu * 12) + (NbSenior * 15);
	if(NbBillets >= 5)
	{
		Total = Total * 0.90;
	}
 	console.log("Votre nombre de billet est de: " + NbBillets + ", et votre total est de: " + Total + "$");   //affichage dans l'outil de débuggage du navigateur.
}