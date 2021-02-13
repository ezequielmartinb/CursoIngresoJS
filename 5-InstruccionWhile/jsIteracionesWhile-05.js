/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese Femenino ó Masculino .");

	while(!(sexoIngresado=="Femenino" || sexoIngresado=="Masculino"))
	{
		sexoIngresado=prompt("DATO INCORRECTO. Ingrese Femenino o Masculino");
	}

	document.getElementById("txtIdSexo").value=sexoIngresado;
}//FIN DE LA FUNCIÓN