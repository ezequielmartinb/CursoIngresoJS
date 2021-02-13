/*
	Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
	e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numeroIngresado;
	let contador;
	let acumulador;
	let promedio;
	let respuesta;

	contador=0;
	acumulador=0;
	respuesta="SI"

	while(respuesta=="SI")
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un número #" +contador);
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("Ingrese SI para continuar ingresando números");

	}
	promedio=acumulador/contador;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;


}//FIN DE LA FUNCIÓN