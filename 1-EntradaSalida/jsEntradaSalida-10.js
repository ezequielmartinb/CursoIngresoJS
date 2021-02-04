/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;

	let importefinal;

	let descuento;

	importe = parseFloat(document.getElementById ("txtIdImporte").value); // parseFloat sirve para que tome nros con decimales

	descuento = importe * 25/100;

	importefinal = importe - descuento;

	importefinal = importefinal.toFixed(2); // toFixed(x) para que solo tome dos decimales el importe final. Tiene que ir en una linea separada, no junto a la linea 22

	document.getElementById("txtIdResultado").value = importefinal;
}

/*	Ezequiel Brañanova

	EJERCICIO 10 BIS

	Debemos lograr tomar el importe por ID.
	Transformarlo a entero (parseInt), luego
	mostrar el importe con un Descuento (que ingrese el usuario)
	en el cuadro de texto "RESULTADO"*//*

function mostrarAumento()
{
	let importe;

	let importefinal;

	let descuento;

	let porcentaje;

	importe = parseFloat(document.getElementById ("txtIdImporte").value);

	porcentaje = prompt("Ingrese el porcentaje del descuento:");

	descuento = importe * porcentaje/100;

	importefinal = importe - descuento;

	importefinal = importefinal.toFixed(2); // toFixed(x) para que solo tome dos decimales el importe final.

	document.getElementById("txtIdResultado").value = importefinal;
}*/
