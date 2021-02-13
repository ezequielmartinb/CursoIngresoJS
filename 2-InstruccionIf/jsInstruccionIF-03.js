function mostrar()
{
	
	let edad;
	
	edad=document.getElementById("txtIdEdad").value; 
	
	edad = parseInt(edad); // Convierto la variable de la edad en un nro para que la maquina entienda que es un nro y no un string
	
	if (edad>17)
		{
			alert("Usted es mayor de edad.");
		}
	else
		{
			alert("Usted es menor de edad");
		}	
		
	/* OTRA FORMA DE RESOLVERLO ES CON DOS IFS

	let edad;
	
	edad=document.getElementById("txtIdEdad").value; 
	
	edad = parseInt(edad); // Convierto la variable de la edad en un nro para que la maquina entienda que es un nro y no un string
	
	if (edad>17)
		{
			alert("Usted es mayor de edad");
		}

	if (edad<18)
		{
			alert("Usted es menor de edad.");
		}	


*/
}//FIN DE LA FUNCIÓN