/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let acumuladorPositivo;
	let acumuladorNegativo
	let respuesta;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let modulo;
	let contadorNumerosPares;
	let promedioPositivo;
	let promedioNegativo;
	let diferenciaPositivosNegativos;
	
	contadorNegativos=0;
	contadorPositivos=0;
	contadorCeros=0;
	contadorNumerosPares=0;

	acumuladorPositivo=0;
	acumuladorNegativo=0;
	respuesta="Si";
	

	while(respuesta=="Si")
	{
		numeroIngresado=prompt("Ingrese un numero:");
		numeroIngresado=parseInt(numeroIngresado);
		modulo=(numeroIngresado)%2;

		if(numeroIngresado>0)
		{
			acumuladorPositivo = acumuladorPositivo + numeroIngresado;
			contadorPositivos=contadorPositivos+1;
			promedioPositivo=acumuladorPositivo/contadorPositivos;
			promedioPositivo=parseFloat(promedioPositivo);
		}
		else
		{	if(numeroIngresado<0)
			{
				acumuladorNegativo=acumuladorNegativo + numeroIngresado;
				contadorNegativos=contadorNegativos+1;
				promedioNegativo=acumuladorNegativo/contadorNegativos;
				promedioNegativo=parseFloat(promedioNegativo);
			}
			else
			{
				if(numeroIngresado==0)
				{
					contadorCeros=contadorCeros+1;
				}							
			}
		}

		if(!(numeroIngresado==0) && modulo==0)
		{
			contadorNumerosPares=contadorNumerosPares+1;
		}

		respuesta = prompt("¿Desea continuar ingresando numeros?");

		diferenciaPositivosNegativos=acumuladorPositivo-acumuladorNegativo;
	}

	document.write("La suma de los numeros negativos es " + acumuladorNegativo + "<br>");
	document.write("La suma de los numeros positivos es " + acumuladorPositivo + "<br>");
	document.write("La cantidad de numeros negativos ingresados es de " + contadorNegativos + "<br>");
	document.write("La cantidad de numeros positivos ingresados es de " + contadorPositivos + "<br>");
	document.write("La cantidad de numeros ceros ingresados es de " + contadorCeros + "<br>");
	document.write("La cantidad de numeros pares ingresados es de " + contadorNumerosPares + "<br>");
	document.write("El promedio de numeros positivos ingresados es de " + promedioPositivo + "<br>");
	document.write("El promedio de numeros negativos ingresados es de " + promedioNegativo + "<br>");
	document.write("La diferencia entre los numeros negativos y positivos ingresados es de " + diferenciaPositivosNegativos + "<br>");

}//FIN DE LA FUNCIÓN