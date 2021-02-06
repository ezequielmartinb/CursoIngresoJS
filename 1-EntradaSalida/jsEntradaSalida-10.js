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

	document.getElementById("txtIdResultado").value = importefinal; // Esto es para mostrar el resultado en la caja de texto Resultado
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

/* 	Ezequiel Brañanova

	Ejercicio 10 bis bis

	En el ejercicio 10 de entrada y salida, se debe pedir el nombre del producto, 
	tambien se debe pedir el porcentaje de descuento al usuario, mostrar el mensaje 
	"usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"
	*//*
	
function mostrarAumento()
	
{
	let descripcionProducto;

	let porcentaje;

	let precio;

	let precioFinal;

	descripcionProducto=prompt("Ingrese el nombre del producto");

	porcentaje=prompt("Ingrese el porcentaje");

	precio=document.getElementById("txtIdImporte").value;

	precio=parseFloat(precio);

	porcentaje=parseFloat(porcentaje);

	precioFinal=precio - precio*porcentaje/100;

	mensaje="Usted compró un " + descripcionProducto + " con " + porcentaje + "% de descuento y el precio final es " + precioFinal;

	document.getElementById("txtIdResultado").value=mensaje;


}*/