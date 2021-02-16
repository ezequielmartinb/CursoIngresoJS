/*
	Al presionar el botón pedir  números  hasta que el usuario quiera,
	sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	let numeroIngresado
	let respuesta;
	let contador;
	let acumulador;
	let acumuladorNegativos;

	contador=0;
	acumulador=0;
	acumuladorNegativos=1;
	respuesta="si";


	while(respuesta=="si")
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un número positivo o negativo #" +contador);
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			acumulador = acumulador+numeroIngresado;
		}
		else
		{
			acumuladorNegativos = acumuladorNegativos*numeroIngresado;
		}
		respuesta=prompt("Ingrese SI para continuar ingresando números: ");
	}
	
	if (acumuladorNegativos==1)
	{
		document.getElementById("txtIdProducto").value=0;
	}
	else
	{
		document.getElementById("txtIdProducto").value=acumuladorNegativos;
	}
	
	document.getElementById("txtIdSuma").value=acumulador;
	

}//FIN DE LA FUNCIÓN