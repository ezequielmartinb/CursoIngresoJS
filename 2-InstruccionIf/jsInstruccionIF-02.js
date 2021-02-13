function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad>17)
	{
		alert("Usted es mayor de edad.");
	}
	
	/*Ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
	Bajo peso
	Peso normal
	Preobesidad
	Obesidad I
	Obesidad II
	Obesidad III */

/*	let nombre;

	let peso;

	let altura;

	let imc;

	let mensaje;

	nombre=prompt("Ingrese su nombre:");
	peso=prompt("Ingrese su peso en KG:");
	altura=prompt("Ingrese su altura en metros:");

	peso=parseFloat(peso);
	altura=parseFloat(altura);
	imc=peso/(altura*altura);
	imc=parseFloat(imc);

	if(imc<18.6)
	{
		mensaje="Bajo peso";
	}
	else
	{
		if(imc>18.4 && imc<25)
		{
			mensaje="Peso normal";
		}
		else
		{
			if(imc>26.9 && imc<30)
			{
				mensaje="Preobesidad";
			}
			else
			{
				if(imc>29.9 && imc<35)
				{
					mensaje="Obesidad I";
				}
				else
				{
					if(imc>34.9 && imc<40)
					{
						mensaje="Obesidad II";
					}
					else
					{
						if(imc>39.9 && imc<50)
						{
							mensaje="Obesidad III";
						}
						else
						{
							mensaje="Obesidad IV";
						}
					}
				}
			}
		}
	}

	alert("Usted se llama " + nombre + " pesa " + peso + " y mide " + altura + " y su IMC indica que " + mensaje);*/



}//FIN DE LA FUNCIÓN