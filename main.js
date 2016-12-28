function monoB()
{
	var img = document.getElementById("img_mono_b");
	var checkB = document.getElementById("mono_b");

	if(checkB.checked)
		img.innerHTML = '<img src="img/feliz.jpg">';
	else
		img.innerHTML = '<img src="img/triste.jpg">';
}
function monoA()
{
	var img = document.getElementById("img_mono_a");
	var checkA = document.getElementById("mono_a");

	if(checkA.checked)
	{
		img.innerHTML = '<img class="imagen" src="img/feliz.jpg">';
	}else{
		img.innerHTML = '<img src="img/triste.jpg">';
	}
}

function evaluar()
{
	var aSmile = document.getElementById("mono_a").checked;
	var bSmile = document.getElementById("mono_b").checked;
	var salida = document.getElementById("salida");

	if(aSmile == bSmile)
	{
		//problemas
		salida.innerHTML = "1";
	}else{
		//NO hay problema
		salida.innerHTML = "0";
	}
}
