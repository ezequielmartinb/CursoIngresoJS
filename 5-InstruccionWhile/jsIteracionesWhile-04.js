/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt("Ingrese un número entre 0 y 9:");

	numeroIngresado = parseFloat(numeroIngresado);

	while(isNaN(numeroIngresado)==true || numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado = prompt("ERROR, ingrese un número entre 0 y 9:");
		numeroIngresado = parseFloat(numeroIngresado);
	}
	
	document.getElementById("txtIdNumero").value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN