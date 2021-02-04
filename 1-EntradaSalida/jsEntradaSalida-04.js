/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre; // Reservo el espacio en memoria para guardar el nombre del usuario

	nombre = prompt("Ingrese su nombre"); // Guardo en la varibale nombre el texto que escribio el usuario
	
	document.getElementById("txtIdNombre").value = "Su nombre es " + nombre; // Copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto en el html

}

