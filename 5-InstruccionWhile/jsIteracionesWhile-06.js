/* 	Al presionar el botón pedir 5 números 
	e informar la suma acumulada y el promedio.*/

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	contador=0;
	acumulador=0;
	
	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un numero # " + contador);
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Usted NO ingresó un número. Ingrese un numero # " + contador);
			numeroIngresado=parseInt(numeroIngresado);
		}
	}
	
	promedio=acumulador/contador;
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN