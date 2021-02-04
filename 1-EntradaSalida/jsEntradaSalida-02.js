/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; // Para consultar: Porque no se puede poner acá nombre = prompt? (error function prompt() { [native code] })

	nombre = prompt ("Ingrese su nombre");

	alert (nombre);

// alert("Su nombre es " + nombre); una forma mejor de hacer este ejercicio
}

