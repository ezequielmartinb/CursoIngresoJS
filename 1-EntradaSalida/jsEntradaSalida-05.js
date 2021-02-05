/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;

	let edad;

	nombre = document.getElementById ("txtIdNombre").value;

	edad = document.getElementById ("txtIdEdad").value;

	//alert("Usted se llama " + nombre +  " y tiene " + edad + " años."); // Concateno textuales con variables con el +

	alert(`Usted se llama ${nombre} y tiene ${edad} años`); // Otra forma de realizar el alert con los datos de las variables

	document.getElementById("txtIdNombre").value = "";

	document.getElementById("txtIdEdad").value = "";

	console.log(nombre); //Muestra datos para el desarrollador. Es una herramienta muy útil

	console.log("nombre");

	console.log(edad);

	console.log("edad"); 
}

/* Ezequiel Brañanova

 Ejercicio 5bis : 
 Se debe mostrar un mensaje :

 "Perez, usted se llama José y tiene 66 años"
  se debe optener el apellido , de la manera que puedan

 {	let nombre;

  	let edad;

  	let apellido;

  	nombre = document.getElementById ("txtIdNombre").value;

  	edad = document.getElementById ("txtIdEdad").value;

  	apellido = prompt("Ingrese su apellido");

  	alert(apellido + ", usted se llama " + nombre + " y tiene " + edad + " años");

  	document.getElementById("txtIdNombre").value = "";

	document.getElementById("txtIdEdad").value = ""; 	
}*/