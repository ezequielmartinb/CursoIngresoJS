/*Al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	//tomo el mes 
	// CON LA FORMA CON IF, SE REALIZAN 4 MICROPROCESOS, POR ESO ES CONVENIENTE USAR EL SWITCH
	
	/* let mesDelAño;

	mesDelAño=document.getElementById("txtIdMes").value;

	if(mesDelAño=="Enero")
	{
		alert("que comiences bien el año!!!.");
	}
	else
	{
		if(mesDelAño=="Marzo")
		{
			alert("a clases!!!.");
		}
		else
		{
			if(mesDelAño=="Julio")
			{
				alert("se vienen las vacaciones!!!.");
			}
			else
			{
				if(mesDelAño=="Diciembre")
				{
					alert("Felices fiesta!!!.");
				}
			}
		}
	}*/


	let mesDelAño;

	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Enero":

			alert("que comiences bien el año!!!.");

			break;

		case "Marzo":

			alert("a clases!!!.");

			break;

		case "Julio":

			alert("se vienen las vacaciones!!!.");

			break;

		case "Diciembre":

			alert("Felices fiesta!!!.");

			break;

		default :
			break;

	}
























}//FIN DE LA FUNCIÓN