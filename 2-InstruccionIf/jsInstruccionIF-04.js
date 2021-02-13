/*	Al ingresar una edad debemos informar si la persona es adolescente, 
	edad entre 13 y 17 años (inclusive).
*/
function mostrar()
{
	let edad;
	
	edad=document.getElementById("txtIdEdad").value; 
	
	edad=parseInt(edad);

	if(edad>12 && edad<18)
	{		
		alert("Usted es un adolecente.");
	}

	/*
		Otra forma de expresar el IF SIN UNA PROPOSICION LOGICA COMPUESTA es así:

		if(edad>12)
		{
			if (edad<18)
			{
			alert("Usted es un adolecente.");
			}
		}
	*/

}//FIN DE LA FUNCIÓN