/*
	Al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada="utn750";

	claveIngresada = prompt("Ingrese el número clave");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("CLAVE INCORRECTA. Ingrese el número clave");
	}

	alert("La clave ingresada es correcta");
	
}//FIN DE LA FUNCIÓN
