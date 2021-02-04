/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;

	nombre = document.getElementById("txtIdNombre").value; // Otra forma de expresar esto es: nombre = txtIdNombre.value pero funciona solo en algunos navegadores

	alert(nombre);

	document.getElementById("txtIdNombre").value = ""; // Para dejar la caja de texto vacia luego de ingresar el nombre
	
}


