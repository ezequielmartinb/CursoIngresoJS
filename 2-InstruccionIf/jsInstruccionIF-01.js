function mostrar()
{
	let edad;

	let valordeverdad;

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
}	
//FIN DE LA FUNCIÓN