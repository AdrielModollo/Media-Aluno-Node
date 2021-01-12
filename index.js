var readline = require('readline-sync');

var nome = "";
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var media = 0;

//Entrada de dados
console.log("Programa que calcula a média de um aluno");
nome = readline.question("Qual é o seu nome?: ");
n1 = parseFloat(readline.question("Informe a primeira nota:"));
n2 = parseFloat(readline.question("Informe a segunda nota:"));
n3 = parseFloat(readline.question("Informe a terceira nota:"));
n4 = parseFloat(readline.question("Informe a quarta nota:"));

media = (n1+n2+n3+n4)/4;
//teste
if (n1< 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10 || n4 < 0 || n4 > 10) {
    console.log("Ops, parece que você informou alguma nota errada!")
} else {
    if (media >= 6 && media <= 10){
        console.log(nome + " você foi aprovado, com a média: " +media);
    } else {
        console.log(nome + " você foi reprovado, com a média: " +media);
    } 
}
