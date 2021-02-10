	/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4 */

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

	console.log(numero);

	if (numero>8)
	{
		alert("EXCELENTE");
	}
	else
		if (numero>3 && numero<9)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}

}//FIN DE LA FUNCIÓN