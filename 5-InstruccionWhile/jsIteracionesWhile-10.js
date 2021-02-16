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
	let contador;
	let acumulador;
	let respuesta;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=="si")
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un número: ");
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("¿Desea continuar ingresando números?");
		if(numeroIngresado>0)
		{
			acumulador = acumulador + numeroIngresado;
		}
		else
		{
			 
		}
	}




}//FIN DE LA FUNCIÓN