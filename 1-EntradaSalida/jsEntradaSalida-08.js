/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{
	let dividendo;

	let divisor;

	let resultado;

	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);

	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resultado = dividendo % divisor;

	alert("El resto es " + resultado);
}

/*	3 - Ingresar dos numeros por id
	Se pide	mostrar por console.log:
	a) La suma de los dos numeros
	b) El promedio de los numeros.
	c) El modulo de los numeros (el primero en modulo del segundo)
*//*
function SacarResto()
{
	let numeroUno;

	let numeroDos;

	let suma;

	let promedio;

	let modulo;

	numeroUno=document.getElementById("txtIdNumeroDividendo").value;

	numeroDos=document.getElementById("txtIdNumeroDivisor").value;

	numeroUno=parseFloat(numeroUno);

	numeroDos=parseFloat(numeroDos);

	suma=numeroUno+numeroDos;

	console.log(suma);

	promedio=(numeroUno+numeroDos)/2;

	console.log(promedio);

	modulo=numeroUno%numeroDos;

	console.log(modulo);

}*/