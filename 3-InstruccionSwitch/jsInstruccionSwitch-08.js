/* Al seleccionar un destino informar 
si hace FRIO o CALOR en ese destino */


function mostrar()
{
	let destinoIngresado;

	let mensaje;

	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="FRIO";
			break;
		default:
			mensaje="CALOR"
	}
	alert("En este destino hace " + mensaje);

}//FIN DE LA FUNCIÓN