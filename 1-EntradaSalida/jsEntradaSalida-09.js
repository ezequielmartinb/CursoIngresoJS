/*
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el nuevo sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;

	let nuevosueldo;

	let aumento;

	sueldo = parseFloat(document.getElementById ("txtIdSueldo").value);

	aumento = sueldo * 10/100;

	nuevosueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevosueldo;

}


/* EJERCICIO 9 BIS
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el nuevo sueldo con un aumento (que se le pide al usuario)
en el cuadro de texto "RESULTADO".
function mostrarAumento()

{
	let sueldo;

	let nuevosueldo;

	let aumento;

	let porcentaje;

	sueldo = parseFloat(document.getElementById ("txtIdSueldo").value);

	porcentaje = prompt ("Ingrese el porcentaje del aumento:");

	aumento = sueldo * porcentaje/100;

	nuevosueldo = sueldo + aumento;

	nuevosueldo = nuevosueldo.toFixed(2);

	document.getElementById("txtIdResultado").value = nuevosueldo;
}*/


/* let sueldo;

let nuevosueldo;

let aumento;

sueldo = parseInt(document.getElementById ("txtIdSueldo").value);

aumento = 10/100;

nuevosueldo = sueldo * aumento + sueldo;

alert("El nuevo sueldo es " + nuevosueldo) */

// ASÍ HICE YO EL EJERCICIO. ESTARÁ BIEN? NO, PORQUE HAY QUE PRESENTARLO EN LA CAJA DE TEXTO. POR ESO, LA ÚLTIMA LINEA CON DOCUMENT.ELEMENTBYID