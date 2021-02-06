/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperaturaF;
    
    let temperaturaC;

    temperaturaF = parseFloat(document.getElementById ("txtIdTemperatura").value); //Tomó el valor de la caja de texto de Temperatura

    temperaturaC = (temperaturaF - 32) / 1.8; // Realiazo la formula para pasar de Fahrenheit a Centigrados (la busco en Google)

    alert(temperaturaF + "º Fahrenheit son " + temperaturaC.toFixed(2) + "º Centígrados."); // Expreso el resultado a través de un alert
}

function CentigradosFahrenheit () 
{
	let temperaturaF;
    
    let temperaturaC;

    temperaturaC = parseFloat(document.getElementById ("txtIdTemperatura").value);

    temperaturaF = (temperaturaC * 1.8) + 32;

    alert(temperaturaC + "º Centígrados son " + temperaturaF.toFixed(2) + "º Fahrenheit.");
}
