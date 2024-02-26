/* 
Desafios 01
Criar uma função que exibe "Olá, mundo!" no console.
function exibirMensagemNoConsole(){
    console.log('Olá mundo!!!');
}
exibirMensagemNoConsole();*/

/*Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome){
    console.log(`Olá, ${nome}`);
}
exibirNome('Nome teste');*/

/*Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let num = numeroDobro(789);
console.log(num);

function numeroDobro(numero){
    return numero * 2;
}*/

/*Criar uma função que recebe três números como parâmetros e retorna a média deles.
let numeros = mediaNumeros(4, 5, 6);
console.log(numeros);

function mediaNumeros(num1, num2, num3){
    return Number(num1 + num2 + num3) / 3;
}*/

/*Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
let numeroMaior = verificaNumeroMaior(78, 99);
console.log(numeroMaior);

function verificaNumeroMaior(num1, num2){
    return num1 > num2 ? num1 : num2;
}*/

/*Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
let numero = multiplicarNumero(16);
console.log(numero);

function multiplicarNumero(numero){
    return numero * numero;
}
*/

/*
Desafios 02
Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, 
que serão recebidos como parâmetro.
let altura = Number(prompt('Informe a sua altura'));
let peso = Number(prompt('Informe o seu peso'));

function calcularImc(){
    let imc = peso/(altura * altura);
    console.log(imc.toFixed(2));    
}
calcularImc();
*/

/*
Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let contador = 4;
function calcularFatorial(numero){
    while(contador > 0){
        let produto = numero * (numero - 1) * (numero - 2);
        contador--;
        console.log(`O fatorial do número ${numero}! é o produto ${produto}`);
    }   
}
calcularFatorial(4);

--Exemplo do Gui--
-----------------------------------------------------
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
------------------------------------------------------
*/

/*
Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(valor){
    let resultado = valor * 4.80;
    let palavraDolar = valor > 1 ? 'dólares' : 'dólar';
    let palavraReal = valor > 1 ? 'reais' : 'real';
    return console.log(`O valor de US$${valor} ${palavraDolar} equivale à R$${resultado} ${palavraReal}`);
}

converterDolarParaReal(1.00);

--Exemplo do Gui--
---------------------------------------------------------------------
function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

// Exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
----------------------------------------------------------------------
*/

/*
Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let valorLargura = parseInt(prompt('Informe um valor para a largura'));
let valorAltura = parseInt(prompt('Informe um valor para a altura'));

function calcularAreaPerimetro(largura, altura){
    let area = largura * altura;
    let perimetro = 2 * (largura + altura);

    alert(`A área da sala retangular é: ${area}. E seu perímetro é: ${perimetro}`);
}

calcularAreaPerimetro(valorLargura, valorAltura);

--Exemplo do Gui--
---------------------------------------------------------------
function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);
---------------------------------------------------------------
*/

/*
Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let valorRaio = parseInt(prompt('Informe um valor para a o raio'));

function calcularAreaPerimetroCirculo(raio){
    let area = 3.14 * raio ** 2;
    let perimetro = 2 * 3.14 * raio;
    
    alert(`A área da sala circular é: ${area}. E seu perímetro é: ${perimetro}`);
}

calcularAreaPerimetroCirculo(valorRaio);

--Exemplo do Gui--
---------------------------------------------------------------------------
function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

// Exemplo de uso
let raio = 4; // em metros
calcularAreaPerimetroSalaCircular(raio);
----------------------------------------------------------------------------
*/

/*
Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
let num = parseInt(prompt('Informe um número para calcular sua tabuada'));

function cacularTabuadaNumero(numero){
contador = 1;
    while(contador <= 10){
        let resultado = numero * contador;
        alert(`${numero} * ${contador} = ${resultado}`);
        contador++;
    }
}

cacularTabuadaNumero(num);

--Exemplo do Gui--
---------------------------------------------------
function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let numero = 7;
mostrarTabuada(numero);
----------------------------------------------------
*/

/* Desafios 03
Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];
*/

/*
Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
*/

/*
Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java', 'Ruby', 'Python');
*/

/*
Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaDeNomes = ['Paulo', 'José', 'Silas'];
console.log(listaDeNomes[0]);
*/

/*
Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let listaDeNomes = ['Paulo', 'José', 'Silas'];
console.log(listaDeNomes[1]);
*/

/*
Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaDeNomes = ['Paulo', 'José', 'Silas'];
console.log(listaDeNomes[2]);
*/