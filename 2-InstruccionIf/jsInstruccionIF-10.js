	/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4 */

function mostrar()
{
	let notaRandom;

	let numeroRandom;

	numeroRandom= (Math.random() *9) + 1;

	notaRandom=Math.round(numeroRandom);

	notaRandom=parseFloat(notaRandom);

	console.log(notaRandom);

	if (notaRandom>8)
	{
		alert("EXCELENTE");
	}
	else
	{	if (notaRandom<4)
		{
			alert("Vamos, la proxima se puede");
		}
		else
		{
			alert("APROBÓ");
		}
	}
}//FIN DE LA FUNCIÓN


	/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4 
	MOSTRAR CON UN SOLO ALERT

	function mostrar()
	{
		let notaRandom;
	
		let numeroRandom;

		let mensaje;
	
		numeroRandom=(Math.random() *9) + 1;
	
		notaRandom=Math.round(numeroRandom);
	
		notaRandom=parseFloat(notaRandom);
	
		console.log(notaRandom);
	
		if (notaRandom>8)
		{
			mensaje = "EXCELENTE " + notaRandom;
		}
		else
		{	if (notaRandom<4)
			{
				mensaje = "Vamos, la proxima se puede " + notaRandom;
			}
			else
			{
				mensaje = "APROBÓ " + notaRandom;
			}
		}

		alert(mensaje);
	}*/