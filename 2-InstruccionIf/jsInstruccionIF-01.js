function mostrar()
{
	let edad;

	// let valordeverdad;

	edad=document.getElementById("txtIdEdad").value; 

	edad = parseInt(edad); // Convierto la variable de la edad en un nro para que la maquina entienda que es un nro y no un string

	if (edad==15) // Va == porque si pongo edad=15 me sobre escribe la edad y no me toma el ID que el usuario pone en la página

	{
		alert("Niña bonita");
	}

	else
	{
		alert("Su edad es de " + edad + " años.");
	}
}

/*
	valordeverdad=edad==15;
	console.log(valordeverdad);

	if(valordeverdad)
	{
		alert("verdadero");
	}
	else
	{
		alert("falso");
	}*/
/*
VERDADEROS: CUALQUIER COSA DISTINTA DE 0 ES VERDADERO
	1
	"1"
	"0"
	"cualquier texto"
	true
FALSOS: EL FALSO DETECTA 0
	0
	false
*/
	/* EJERCICIO DE REPASO
	Pedir a una persona que fue de vaciones, 
	la distancia que viajo y el tiempo que tardo, 
	para calcular la velocidad
	e informar:

	60 km/hr = muy lento
	Hasta 80km/h= lento
	Hasta 100= buen ritmo
	Hasta 120= ahi de la ley
	Mas = eso no se hace
*/

/*function mostrar()
{
	let distancia;

	let tiempo;

	let velocidad;

	let mensaje;

	tiempo=prompt("Ingrese el tiempo que tardó (hs):");

	distancia=prompt("Ingrese la distancia que viajó (Km)");

	tiempo=parseFloat(tiempo);

	distancia=parseFloat(distancia);

	velocidad=distancia/tiempo;

	if (velocidad<61)
	{
		mensaje="Muy lento";
	}
	else
	{
		if(velocidad<81)
		{
			mensaje="Lento";
		}
		else
		{
			if(velocidad<101)
			{
				mensaje="Buen ritmo";
			}
			else
			{
				if(velocidad<121)
				{
					mensaje="Ahí de la ley";
				}
				else
				{
					if(velocidad>120)
					{
						mensaje="Eso no se hace";
					}
				}
			}
		}
	}
	alert(mensaje);
} FIN DE LA FUNCIÓN*/
