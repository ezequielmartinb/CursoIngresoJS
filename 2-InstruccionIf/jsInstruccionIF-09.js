	/*Al presionar el Botón, 
	mostrar un número Random 
	del 1 al 10 inclusive
	*/

function mostrar()
{
	let numero;

	let maximo;

	let minimo;

	let random;

	maximo=10;

	minimo=1;

	random=(maximo - minimo) + minimo;

	random=parseFloat(random);

	numero=Math.round((Math.random() * (random)));

	numero=parseFloat(numero);

	alert(numero);

}//FIN DE LA FUNCIÓN