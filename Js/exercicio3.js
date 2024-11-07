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

14.Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número.
Não utilize a função de potência da linguagem.

let base = parseInt(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));
let resultado = 1;

for (let i = 1; i <= expoente; i++) {
  resultado *= base;
}
document.write(base + " elevado a " + expoente + " é: " + resultado + "<br>");

15. Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.

let contadorPar = 0;  
let contadorImpar = 0;  

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Digite o " + i + "º número inteiro: "));

    if (numero % 2 == 0) {
        contadorPar++;  
    } else {
        contadorImpar++
    }
}

document.write("Quantidade de números pares: " + contadorPar + " <br>");
document.write("Quantidade de números ímpares: " + contadorImpar);

16. Gere a sequência de Fibonacci até o n-ésimo termo.
  
let n = 10; 
let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

console.log("Sequência de Fibonacci:", fibonacci.join(", "));
document.write("Sequência de Fibonacci:", fibonacci.join(", "));

17. Gere a sequência de Fibonacci até que o valor seja maior que 500.

18. Calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5! = 5 × 4 × 3 × 2 × 1 = 120.

let numero = parseInt(prompt("Digite um número: "));
let fatorial = 1;

if (numero < 0) {
    console.log("Fatorial não existe para números negativos.");
    document.write("Fatorial não existe para números negativos.");
} else if (numero === 0 || numero === 1) {
    console.log(`O fatorial de ${numero} é 1.`);
    document.write(`O fatorial de ${numero} é 1.`);
} else {
    for (let i = numero; i > 1; i--) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}.`);
    document.write(`O fatorial de ${numero} é ${fatorial}.`);
}

19. Determine o menor, o maior e a soma dos valores de um conjunto de N números fornecidos.
  
let numeros = [4, 8, 13, 27, 39];  

let menor = numeros[0];  
let maior = numeros[0]; 
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];  
    }
    if (numeros[i] > maior) {
        maior = numeros[i];  
    }
    soma += numeros[i];   
}
document.write("Menor valor: " + menor + "<br>");
document.write("Maior valor: " + maior + "<br>");
document.write("Soma dos valores: " + soma + "<br>");

console.log("Menor valor:", menor);
console.log("Maior valor:", maior);
console.log("Soma dos valores:", soma);

20. Altere o programa anterior para aceitar apenas números entre 0 e 1000.

const numeros = [20, 400, 75, 1600, 10, 200, 3000, -15]; 

let menor = null;
let maior = null;
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
   
    if (numeros[i] >= 0 && numeros[i] <= 1000) {
        if (menor === null || numeros[i] < menor) {
            menor = numeros[i];
        }
        if (maior === null || numeros[i] > maior) {
            maior = numeros[i];
        }
        soma += numeros[i];
    }
}
if (menor !== null) {
    document.write("Menor valor: ", menor + "<br>");
    document.write("Maior valor: ", maior  + "<br>");
    document.write("Soma dos valores: ", soma);
} else {
    document.write("Nenhum número no intervalo entre 0 e 1000.");
}

21. Permita ao usuário calcular o fatorial várias vezes e limite o fatorial a números inteiros positivos menores 
que 16.

22. Determine se um número inteiro é primo.

let numero = parseInt(prompt("Digite um número inteiro:"));
let isPrimo = true;  

if (numero < 2) {
    isPrimo = false;
} else {
   
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {  
            isPrimo = false;
            break; 
        }
    }
}

if (isPrimo) {
    document.write(numero + " é um número primo.");
} else {
    document.write(numero + " não é um número primo.");
}


23. Modifique o programa para indicar, caso o número não seja primo, por quais números ele é divisível.

24. Exiba todos os números primos entre 1 e N.

let N = 50;  
//Aparecer 1 vez apenas o texto "Os números primos são:" é necessário colocá-lo fora do loop principal e 
//exibir apenas os números primos em cada linha.

document.write("Os números primos são:<br>"); 
console.log("Os números primos são:");

for (let i = 2; i <= N; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;  
        }
    }
    if (isPrime) {
        document.write(i + "<br>"); // Exibe apenas o número primo
        console.log(i);
    }
}

25. Calcule a média aritmética de N notas fornecidas.
  
let notas = [8.5, 8, 7, 6, 10]; 
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]; 
}
let media = soma / notas.length;  

document.write("A média aritmética é: " + media);
console.log("A média aritmética é:", media);

26. Solicite a idade de N pessoas e determine se a média indica uma turma jovem (0-25), adulta (26-60)
ou idosa (acima de 60).

const x = parseInt(prompt("Quantas pessoas há na turma?"));
let somaIdades = 0;

for (let i = 1; i <= x; i++) {
    const idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));
    somaIdades += idade;
}

const mediaIdade = somaIdades / x;
let classificacao;

if (mediaIdade >= 0 && mediaIdade <= 25) {
    classificacao = "jovem";
} else if (mediaIdade >= 26 && mediaIdade <= 60) {
    classificacao = "adulta";
} else if (mediaIdade > 60) {
    classificacao = "idosa";
}
document.write(`A média de idade da turma é ${mediaIdade.toFixed(2)}, considerada ${classificacao}.`);
console.log(`A média de idade da turma é ${mediaIdade.toFixed(2)}, considerada ${classificacao}.`);


27. Simule uma eleição com três candidatos e exiba o número de votos de cada um ao final.

const totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
let votosCandto1 = 0;
let votosCandto2 = 0;
let votosCandto3 = 0;

for (let i = 1; i <= totalEleitores; i++) {
    let voto;

    do {
        voto = parseInt(prompt("Eleitor " + i + ", vote no candidato (1, 2 ou 3):"));
        if (voto !== 1 && voto !== 2 && voto !== 3) {
            alert("Voto inválido! Por favor, vote em 1, 2 ou 3.");
        }
    } while (voto !== 1 && voto !== 2 && voto !== 3);

    if (voto === 1) {
        votosCandto1++;
    } else if (voto === 2) {
        votosCandto2++;
    } else if (voto === 3) {
        votosCandto3++;
    }
}

document.write("Resultado da eleição: <br>");
document.write("Candidato 1: " + votosCandto1 + " votos<br>");
document.write("Candidato 2: " + votosCandto2 + " votos<br>");
document.write("Candidato 3: " + votosCandto3 + " votos<br>");


28. Calcule o número médio de alunos por turma, considerando que cada turma tem no máximo 40 alunos.

const totalAlunos = parseInt(prompt("Informe número total de alunos:"));
const alunosPorTurmaMaximo = 40;

let numeroDeTurmas = Math.ceil(totalAlunos / alunosPorTurmaMaximo);
let mediaAlunosPorTurma = totalAlunos / numeroDeTurmas;

document.write(" O Número total de alunos é: " + totalAlunos + "<br>");
document.write("O Número de turmas necessárias são: " + numeroDeTurmas + "<br>");
document.write("A Média de alunos por turma é : " + mediaAlunosPorTurma.toFixed(2) + "<br>");

29. Calcule o valor total investido por um colecionador em CDs e o valor médio gasto em cada um.

let numeroDeCDs = parseInt(prompt("Digite o número de CDs:"));
let precoPorCD = parseFloat(prompt("Digite o preço de cada CD:"));

let valorTotalInvestido = numeroDeCDs * precoPorCD;
let valorMedioPorCD = valorTotalInvestido / numeroDeCDs;

document.write("Número de CDs: " + numeroDeCDs + "<br>");
document.write("Preço de cada CD: R$ " + precoPorCD.toFixed(2) + "<br>");
document.write("Valor total investido: R$ " + valorTotalInvestido.toFixed(2) + "<br>");
document.write("Valor médio gasto por CD: R$ " + valorMedioPorCD.toFixed(2) + "<br>");

30. Monte uma tabela de preços de 1 a 50 itens, onde cada item custa R$ 1,99, para uma loja de R$ 1,99.

let precoPorItem = 1.99;

document.write("Tabela de Preços: <br><br>");

for (let i = 1; i <= 50; i++) {
    let precoTotal = (i * precoPorItem).toFixed(2);
    document.write("Quantidade: " + i + " - Preço Total: R$ " + precoTotal + "<br>");
}


31. Monte uma tabela de preços de pães para uma padaria, onde o preço do pão é informado pelo usuário.

let precoDoPao = parseFloat(prompt("Informe o preço do pão: "));
document.write("Tabela de Preçs: <br><br>");

for (let i = 1; i <= 50; i++) {
    let precoTotal = (i * precoDoPao).toFixed(2); // Calcula o preço total
    document.write("Quantidade: " + i + " - Preço Total: R$ " + precoTotal + "<br>");
}

32. Implemente uma caixa registradora rudimentar para uma loja de conveniência.

33. Informe a menor, a maior e a média das temperaturas de um conjunto indeterminado de valores.

34. Verifique se um número é primo (com foco em criptografia).

35. Gere uma lista dos números primos entre 1 e um número fornecido pelo usuário.

36. Gere a tabuada de um número qualquer, com intervalos informados pelo usuário.

let numero = parseInt(prompt("Digite o número para gerar a tabuada:"));

let intervaloInicio = parseInt(prompt("Digite o número inicial do intervalo:"));
let intervaloFim = parseInt(prompt("Digite o número final do intervalo:"));

for (let i = intervaloInicio; i <= intervaloFim; i++) {
    const resultado = numero * i;
    document.write(numero + " x " + i + " = " + resultado + "<br>");
}

37. Calcule o mais alto, o mais baixo, o mais gordo e o mais magro cliente de uma academia e informe as médias de 
altura e peso.

38. Calcule o salário atual de um funcionário contratado em 1995 com aumento anual variável, baseado em seu
salário inicial.

let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));
let anosTrabalhados = new Date().getFullYear() - 1995;
let aumentosAnuais = [];

for (let i = 1; i <= anosTrabalhados; i++) {
    let aumento = parseFloat(prompt(`Digite o aumento percentual para o ano ${1995 + i}:`));
    aumentosAnuais.push(aumento);
}
let salarioAtual = salarioInicial;

for (let aumento of aumentosAnuais) {
    salarioAtual += salarioAtual * (aumento / 100);
}
document.write("O salário atual do funcionário é R$ " + salarioAtual.toFixed(2));

39. Realize uma estatística de acidentes de trânsito em cinco cidades e analise os resultados.

40. Exiba uma tabela de uma dívida com base em juros e número de parcelas.
