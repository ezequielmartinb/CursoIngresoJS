/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let bandera;
	let respuesta;

	respuesta="Si";
	bandera="Es el primer número ingresado";

	while(respuesta=="Si")
	{
		numeroIngresado=prompt("Ingrese un número: ");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(bandera=="Es el primer número ingresado")
		{
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
			bandera="No es el primer número ingresado";
		}
		if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}

		respuesta=prompt("¿Desea ingresar un nuevo número? Si o No");

	}

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;

}//FIN DE LA FUNCIÓN