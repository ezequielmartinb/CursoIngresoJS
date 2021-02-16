/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada 
por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y 
luego asignarla a cuadros de textos. 
	Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBrutoIngresado;
	let legajoIngresado;
	let nacionalidadIngresada;

	//EDAD
	edadIngresada=prompt("Ingrese su edad: ");
	edadIngresada=parseInt(edadIngresada);

	while(isNaN(edadIngresada)==true || (edadIngresada<18 || edadIngresada>90))
	{
		edadIngresada=prompt("ERROR. Ingrese nuevamente su edad: ");
	}

	document.getElementById("txtIdEdad").value=edadIngresada + " años";

	//SEXO
	sexoIngresado=prompt("Ingrese su sexo Masculino (M) o Femenino (F): ");

	while(!(sexoIngresado=="M" || sexoIngresado=="F"))
	{
		sexoIngresado=prompt("ERROR. Ingrese nuevamente su sexo Masculino (M) o Femenino (F): ");
	}

	switch(sexoIngresado)
	{
		case "M":
			document.getElementById("txtIdSexo").value="Masculino";
			break;
		case "F":
			document.getElementById("txtIdSexo").value="Femenino";
			break;
	}
	
	//ESTADO CIVIL
	estadoCivilIngresado=prompt("Ingrese su estado civil: 1, si es SOLTERO; 2, si es CASADO; 3, si es DIVORCIADO o 4, si es VIUDO");

	while(!(estadoCivilIngresado>0 && estadoCivilIngresado<5))
	{
		estadoCivilIngresado=prompt("ERROR. Ingrese su estado civil: 1, si es SOLTERO; 2, si es CASADO; 3, si es DIVORCIADO o 4, si es VIUDO");
	}

	estadoCivilIngresado=parseInt(estadoCivilIngresado);

	switch(estadoCivilIngresado)
	{
		case 1:
			document.getElementById("txtIdEstadoCivil").value="Soltero";
			break;
		case 2:
			document.getElementById("txtIdEstadoCivil").value="Casado";
			break;
		case 3:
			document.getElementById("txtIdEstadoCivil").value="Divorciado";
			break;
		case 4:
			document.getElementById("txtIdEstadoCivil").value="Viudo";
			break;
	}

	//SUELDO BRUTO
	sueldoBrutoIngresado=prompt("Ingrese su sueldo bruto (no menor a $8000): ");

	while(isNaN(sueldoBrutoIngresado)==true || sueldoBrutoIngresado<8001)
	{
		sueldoBrutoIngresado=prompt("ERROR. Ingrese su sueldo bruto: ");
	}

	sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);

	document.getElementById("txtIdSueldo").value="$" + sueldoBrutoIngresado;

	//LEGAJO
	legajoIngresado=prompt("Ingrese su legajo: ");

	while(isNaN(legajoIngresado)==true || legajoIngresado<1000)
	{
		legajoIngresado=prompt("ERROR. Ingrese su legajo: ");
	}

	document.getElementById("txtIdLegajo").value=legajoIngresado;

	//NACIONALIDAD
	nacionalidadIngresada=prompt("Ingrese su nacionalidad Argentino (A); Extrajero (E) o Nacionalizado (N): ");

	while(!(nacionalidadIngresada=="A" || sexoIngresado=="E" || nacionalidadIngresada== "N"))
	{
		nacionalidadIngresada=prompt("ERROR. Ingrese su nacionalidad: ");
	}

	switch(nacionalidadIngresada)
	{
		case "A":
			document.getElementById("txtIdNacionalidad").value="Argentina";
			break;
		case "E":
			document.getElementById("txtIdNacionalidad").value="Extranjero";
			break;
		case "N":
			document.getElementById("txtIdNacionalidad").value="Nacionalizado";
			break;
	}

}
