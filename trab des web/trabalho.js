//operações
function operacoes(){
	var valor1,valor2, soma, sub, mult,div;

	valor1 = parseInt(document.getElementById('primeiro').value);


	valor2 = parseInt(document.getElementById('segundo').value);

	soma = valor1 + valor2;

	sub = valor1 - valor2;

	mult = valor1 * valor2;

	div = valor1 / valor2;

	document.getElementById("resultado").innerHTML = "soma: " + valor1 + " + " + valor2 + " = " + soma+"</br>"+
													"sub: " + valor1 + " - " + valor2 + " = " + sub+ "</br>"+
													"mult: " + valor1 + " * " + valor2 + " = " + mult+ "</br>"+
													"div: " + valor1 + " / " + valor2 + " = " + div ;
}