/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  Lamparita bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  Lamparita bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  Lamparita bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  Lamparita bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{	
	let cantidadLamparitas;

	let precioLamparita;

	let precioBruto;

	let marca;

	let porcentaje;

	let ingresosBrutos;

	cantidadLamparitas=document.getElementById("txtIdCantidad").value;

	cantidadLamparitas=parseInt(cantidadLamparitas);

	precioLamparita = cantidadLamparitas*35;

	precioLamparita = parseFloat(precioLamparita);

	marca=document.getElementById("Marca").value;

	switch(cantidadLamparitas)
	{
		case 0:
			porcentaje=0;
			break;
		case 1:
			porcentaje=0;
			break;
		case 2:
			porcentaje=0;
			break;
		case 3:
			if (marca=="ArgentinaLuz")
			{
				porcentaje=15;
			}
			else
			{
				if (marca=="FelipeLamparas")
				{
					porcentaje=10;
				}
				else
				{
					if (marca!="ArgentinaLuz" && marca!="FelipeLamparas")
					{
						porcentaje=5
					}
				}
				
			}
			break;
		case 4:
			if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
			{
				porcentaje=25;
			}
			else
			{
				if(!(marca=="ArgentinaLuz" || marca=="FelipeLamparas"))
				{
					porcentaje=20;
				}
			}
			break;
		case 5:
			if(marca=="ArgentinaLuz")
			{
				porcentaje=40;
			}
			else
			{
				if(!(marca=="ArgentinaLuz"))
				{
					porcentaje=30;
				}
			}
			break;
		default:
			porcentaje=50;
			break;
	}

	precioBruto = precioLamparita - (precioLamparita*porcentaje/100);

	precioBruto = parseFloat(precioBruto);

	document.getElementById("txtIdprecioDescuento").value=precioBruto;

	if (precioBruto>120)
	{
		ingresosBrutos = (precioBruto*10/100)
		
		precioBruto = precioBruto + ingresosBrutos;

		alert("Usted pago $" + ingresosBrutos + " de IIBB");
	}
}




















































































	/*	TP CON SWITCH SOLO EL DESCUENTO

	// TIENE QUE DAR 105
	if (cantidadLamparitas>5)
	{
		porcentaje = 50;
	}
	else
	{	// TIENE QUE DAR 105
		if (cantidadLamparitas==5 && marca=="ArgentinaLuz")
		{
			porcentaje=40;
		}
		else
		{	// TIENE QUE DAR 122.50
			if(cantidadLamparitas==5 && !(marca=="ArgentinaLuz"))
			{
				porcentaje=30;
			}
			else
			{	// TIENE QUE DAR 105
				if (cantidadLamparitas==4 && (marca=="ArgentinaLuz" || marca=="FelipeLamparas"))
				{
					porcentaje=25;
				}
				else
				{	// TIENE QUE DAR 112
					if (cantidadLamparitas==4 && !(marca=="ArgentinaLuz" || marca=="FelipeLamparas"))
					{
						porcentaje=20;
					}
					else
					{	// TIENE QUE DAR 89.25
						if (cantidadLamparitas==3 && marca=="ArgentinaLuz")
						{
							porcentaje=15;
						}
						else
						{	// TIENE QUE DAR 94.50
							if (cantidadLamparitas==3 && marca=="FelipeLamparas")
							{
								porcentaje=10;
							}
							else
							{	// TIENE QUE DAR 99.75
								if (cantidadLamparitas==3 && marca!="ArgentinaLuz" && marca!="FelipeLamparas")
								{
									porcentaje=5;
								}
								else
								{	// TIENE QUE DAR 70; 35 Y 0
									if (cantidadLamparitas<3)
									{
										porcentaje=0
									}
								}
							}
						}
					}
				}
			}
		}
	}

	precioBruto = precioLamparita - (precioLamparita*porcentaje/100);

	precioBruto = parseFloat(precioBruto);

	document.getElementById("txtIdprecioDescuento").value=precioBruto;

	if (precioBruto>120)
		{
			switch(precioBruto)
			{
				case 120:
				default:
				ingresosBrutos = (precioBruto*10/100)
		
				precioBruto = precioBruto + ingresosBrutos;
	
				alert("Usted pago $" + ingresosBrutos + " de IIBB");
			}
		}
}*/











/*

	let cantidadLamparitas;

	let precioLamparita;

	let precioBruto;

	let marca;

	let porcentaje;

	let ingresosBrutos;

	cantidadLamparitas=document.getElementById("txtIdCantidad").value;

	cantidadLamparitas=parseInt(cantidadLamparitas);

	precioLamparita = cantidadLamparitas*35;

	precioLamparita = parseFloat(precioLamparita);

	marca=document.getElementById("Marca").value;

	// TIENE QUE DAR 105
	if (cantidadLamparitas>5)
	{
		porcentaje = 50;
	}
	else
	{	// TIENE QUE DAR 105
		if (cantidadLamparitas==5 && marca=="ArgentinaLuz")
		{
			porcentaje=40;
		}
		else
		{	// TIENE QUE DAR 122.50
			if(cantidadLamparitas==5 && !(marca=="ArgentinaLuz"))
			{
				porcentaje=30;
			}
			else
			{	// TIENE QUE DAR 105
				if (cantidadLamparitas==4 && (marca=="ArgentinaLuz" || marca=="FelipeLamparas"))
				{
					porcentaje=25;
				}
				else
				{	// TIENE QUE DAR 112
					if (cantidadLamparitas==4 && !(marca=="ArgentinaLuz" || marca=="FelipeLamparas"))
					{
						porcentaje=20;
					}
					else
					{	// TIENE QUE DAR 89.25
						if (cantidadLamparitas==3 && marca=="ArgentinaLuz")
						{
							porcentaje=15;
						}
						else
						{	// TIENE QUE DAR 94.50
							if (cantidadLamparitas==3 && marca=="FelipeLamparas")
							{
								porcentaje=10;
							}
							else
							{	// TIENE QUE DAR 99.75
								if (cantidadLamparitas==3 && marca!="ArgentinaLuz" && marca!="FelipeLamparas")
								{
									porcentaje=5;
								}
								else
								{	// TIENE QUE DAR 70; 35 Y 0
									if (cantidadLamparitas<3)
									{
										porcentaje=0
									}
								}
							}
						}
					}
				}
			}
		}
	}

	precioBruto = precioLamparita - (precioLamparita*porcentaje/100);

	precioBruto = parseFloat(precioBruto);

	document.getElementById("txtIdprecioDescuento").value=precioBruto;

	if (precioBruto>120)
	{
		ingresosBrutos = (precioBruto*10/100)
		
		precioBruto = precioBruto + ingresosBrutos;

		alert("Usted pago $" + ingresosBrutos + " de IIBB");
	}
}*/