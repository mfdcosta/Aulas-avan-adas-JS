
1.Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido
e continue pedindo até que o usuário informe um valor válido.
  
let nota;
do {
  nota = parseFloat(prompt("Digite uma nota entre 0 e 10:"));
  if (nota < 0 || nota > 10) {
    document.write("Valor inválido. Tente novamente.");
    console.log("Valor inválido. Tente novamente.");
  }
} while (nota < 0 || nota > 10);
document.write("Nota válida:", nota);
console.log("Nota válida:", nota);

2.Crie um loop que imprima todos os números de 1 a 100.
for (let i = 1; i <= 100; i++) {
    document.write(i);
    console.log(i);
  }
  
3.Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do 
usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
let username, password;
do {
  username = prompt("Digite o nome de usuário:");
  password = prompt("Digite a senha:");
  if (username === password) {
    document.write("Erro: a senha não pode ser igual ao nome de usuário.");
    console.log("Erro: a senha não pode ser igual ao nome de usuário.");
  }
} while (username === password);
document.write("Usuário e senha válidos.");
console.log("Usuário e senha válidos.");

4.Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd'.
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

let nome, idade, salario, sexo, estadoCivil;
do {
  nome = prompt("Digite o nome:");
} while (nome.length <= 3);
do {
  idade = parseInt(prompt("Digite a idade (0 a 150):"), 10);
} while (idade < 0 || idade > 150);

do {
  salario = parseFloat(prompt("Digite o salário (maior que 0):"));
} while (salario <= 0);

do {
  sexo = prompt("Digite o sexo ('f' ou 'm'):");
} while (sexo !== 'f' && sexo !== 'm');

do {
  estadoCivil = prompt("Digite o estado civil ('s', 'c', 'v', 'd'):");
} while (!['s', 'c', 'v', 'd'].includes(estadoCivil));
document.write("Informações válidas.");
console.log("Informações válidas.");

5.Supondo que a população de um país A seja de 80.000 habitantes com uma taxa anual de crescimento 
de 3% e que a população de B seja de 200.000 habitantes com uma taxa de crescimento de 1,5%, 
faça um programa que calcule o número de anos necessários para que a população do país A ultrapasse
ou iguale a população do país B, mantidas as taxas de crescimento.

let populacaoA = 80000;
let populacaoB = 200000;
let txCrescA = 0.03;
let txCrescB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * txCrescA;
  populacaoB += populacaoB * txCrescB;
  anos++;
}
document.write("Número de anos necessários para que a população de A ultrapasse ou iguale a população de B:", anos);

6.Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais.
Valide a entrada e permita repetir a operação.
  
let populacaoA = parseInt(prompt("Informe o número de habitantes do país A: "));
let populacaoB = parseInt(prompt("Informe o número de habitantes do país B: "));
let txCrescA = parseFloat(prompt("Informe o número de habitantes anual do país A (em %): "));
let txCrescB = parseFloat(prompt("Informe a taxa de crescimento anual do país B (em %): "));

7.Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 
Depois modifique o programa para que ele mostre os números um ao lado do outro.
for (let i = 1; i <= 20; i++) {
  document.writeln(i + "<br>"); 
}
//Números um ao lado do outro.
for (let i = 1; i <= 20; i++) {
  document.writeln(i + " "); 
}

8.Faça um programa que leia 5 números e informe o maior número.
let maiorNumero = 0; 

for (let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt("Digite o número " + i + ":")); 

  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
}
document.write("O maior número é: " + maiorNumero);

9.Faça um programa que leia 5 números e informe a soma e a média dos números.

let soma = 0; 
for (let i = 1; i <= 5; i++) {
   let numero = parseInt(prompt("Digite o número " + i + ":")); 
   soma += numero; 
}
 let media = soma / 5;
 document.write("A soma dos números é: " + soma +  "<br>");
 document.write("A média dos números é: " + media + "<br>");

10.Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) { 
    document.writeln(i + "<br>"); 
  }
}

11.Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo 
//compreendido por eles.
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

document.write("Números no intervalo entre " + num1 + " e " + num2 + ":<br>");

if (num1 < num2) {
  for (let i = num1 + 1; i < num2; i++) {
    document.write(i + "<br>");
  }
} else {
  for (let i = num2 + 1; i < num1; i++) {
    document.write(i + "<br>");
  }
}

//12. Altere o programa anterior para mostrar no final a soma dos números.

let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let soma = 0;

document.write("Números no intervalo entre " + num1 + " e " + num2 + ":<br>");
if (num1 < num2) {
  for (let i = num1 + 1; i < num2; i++) {
    document.write(i + "<br>");
    soma += i;
  }
} else {
  for (let i = num2 + 1; i < num1; i++) {
    document.write(i + "<br>");
    soma += i;
  }
}
document.write("A soma dos números no intervalo é: " + soma + "<br>");


//13.Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 e 10. 
let numero = parseInt(prompt("Digite um número entre 1 e 10 para verificarmos a tabuada:"));

if (numero >= 1 && numero <= 10) {
  document.write("Tabuada de " + numero + ":<br>");
  for (let i = 1; i <= 10; i++) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
  }
} else {
  document.write("Por favor, digite um número entre 1 e 10.");
}

//14.Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado 
//ao segundo número. Não utilize a função de potência da linguagem.

let base = parseInt(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));
let resultado = 1;

for (let i = 1; i <= expoente; i++) {
  resultado *= base;
}
document.write(base + " elevado a " + expoente + " é: " + resultado + "<br>");
