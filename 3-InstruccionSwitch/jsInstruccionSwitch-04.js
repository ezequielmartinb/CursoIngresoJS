/*
	Al seleccionar un mes informar.
	si tiene 28 días.
	si tiene 30 días.
	si tiene 31 días.
*/


function mostrar()
{
	let mesDelAño;

	mesDelAño = document.getElementById("txtIdMes").value; 

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="28";
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="30";
			break;
			
		default:
			mensaje="31";
			break;
	}
	
	
	alert("Este mes tiene " + mensaje + " días");


}//FIN DE LA FUNCIÓN