/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'*/

function mostrar()
{
	let nombre; // Reservo el espacio en memoria para guardar el nombre del usuario

	nombre = prompt("Ingrese su nombre"); // Guardo en la variable "nombre" el texto que escribio el usuario
	
	document.getElementById("txtIdNombre").value = "Su nombre es " + nombre; // Copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto en el html

	/* Ezequiel Brañanova

	1. Ingresar descripción (por prompt) y precio de un producto (por id).
	El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%
	
	let descripcionProducto;

	let precioProducto;

	let aumento;

	let precioProductoAumentado

	descripcionProducto=prompt("Ingrese la descripción del producto:");
	
	precioProducto=prompt("Ingrese un importe");

	document.getElementById("txtIdNombre").value=precioProducto;

	precioProducto=document.getElementById("txtIdNombre").value;
	
	precioProducto=parseFloat(precioProducto);

	aumento=30;

	precioProductoAumentado=precioProducto + precioProducto * aumento/100;

	mensaje="El producto " + descripcionProducto + " tiene un costo de " + precioProductoAumentado;

	alert(mensaje);

	document.getElementById("txtIdNombre").value="";*/
}

