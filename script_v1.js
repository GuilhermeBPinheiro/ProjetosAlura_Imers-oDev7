// Projeto Convesor Moeda

/*
Versão: 1.0v. 
Data: 21/11/2023
Descrição: O programa tem como objetivo converter um valor de moeda fixo em Real para Dólar.
Observação: Modelo de script fornecido na primeira aula de imersão dev 7ª edição. 
*/

var valorEmReal = 54;
var cotacaoDoDolar = 5.32;

var valorEmDolar = valorEmReal / cotacaoDoDolar;
valorEmDolar = valorEmDolar.toFixed(2);
alert("$ " + valorEmDolar);