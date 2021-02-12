/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

*/
function mostrar()
{
	let estacionIngresada;

	let destinoIngresado;

	let precioFinal;

	let porcentaje;

	const precioEstadia = 15000

	estacionIngresada=document.getElementById("txtIdEstacion").value;

	destinoIngresado=document.getElementById("txtIdDestino").value;

	porcentaje = parseInt(porcentaje);

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{	// TIENE QUE DAR 18000
				case "Bariloche":
					porcentaje=20;
					break;
				// TIENE QUE DAR 13500
				case "Cataratas":
				case "Cordoba":
					porcentaje=-10;
					break;
				// TIENE QUE DAR 12000
				case "Mar del plata":
					porcentaje=-20;
					break;
				
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{	// TIENE QUE DAR 16500
				case "Bariloche":
				case "Cataratas":
				case "Cordoba":
					porcentaje=10;
					break;
				// TIENE QUE DAR 18000
				case "Mar del plata":
					porcentaje=20;
					break;
			}
		break;
		default:
			switch(destinoIngresado)
			{	// TIENE QUE DAR 16500
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje=10;
					break;
				// TIENE QUE DAR 15000
				case "Cordoba":
					porcentaje=0;
					break;
			}
		break;
	}

	precioFinal = precioEstadia + (precioEstadia * porcentaje/100);

	precioFinal = parseFloat(precioFinal);

	alert("El precio final de la estadia es de $" + precioFinal);


}//FIN DE LA FUNCIÓN