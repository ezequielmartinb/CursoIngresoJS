/*	Al ingresar una edad solo debemos informar si la persona 
	NO es adolescente.
*/

function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	if (edad>17 || edad<13)
	{
		alert("Usted no es un adolecente");
	}

	/* OTRA FORMA DE RESOLVERLO
		if(edad>17)
	{
		alert("No es adolescente");
	}
		if(edad<13)
	{
		alert("No es adolescente");
	*/
}//FIN DE LA FUNCIÓN