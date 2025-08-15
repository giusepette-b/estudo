/*eslint-disable no-console*/
// Variáveis e tipos de dados
let nome = "João"; // String
let idade = 25; // Number
let altura = 1.75; // Number
let isEstudante = true; // Boolean
let endereco; // Undefined
let simbolo = Symbol("simbolo"); // Symbol
let bigIntNumero = 1234567890123456789012345678901234567890n; // BigInt
// todas as variáveis acima são de escopo global. E recebem o valor undefined por padrão. A palavra reservada var também cria variáveis de 
// escopo global, mas não é recomendada por questões de boas práticas.
// Variáveis declaradas com let e const possuem escopo de bloco, ou seja, só podem ser acessadas dentro do bloco onde foram declaradas.
// Constantes são variáveis cujo valor não pode ser alterado após a sua atribuição inicial. E são declaradas com a palavra reservada const.
const PI = 3.14159;
// PI = 3.14; // Isso causaria um erro, pois não podemos reatribuir uma constante.
// Tipos de dados primitivos em JavaScript incluem: String, Number, Boolean, Undefined, Null, Symbol e BigInt.
// Null é um tipo especial que representa a ausência intencional de qualquer valor. É diferente de undefined, que indica que uma variável foi declarada mas não inicializada.
let vazio = null;
// Tipos de dados compostos incluem: Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet.
// Objetos são coleções de pares chave-valor.
let pessoa = {
    nome: "Maria",
    idade: 30,
    altura: 1.65,
    isEstudante: false
};
// Arrays são listas ordenadas de valores.
let numeros = [1, 2, 3, 4, 5];
// Funções são blocos de código reutilizáveis que podem receber parâmetros e retornar valores.
function soma(a, b) {
    return a + b;
}

let resultado = soma(5, 10); // resultado é 15
//console.log(`Resultado da soma: ${resultado}`); // Exibe: Resultado da soma: 15
// Funções também podem ser atribuídas a variáveis.
const multiplicacao = function(a, b) {
    return a * b;
}
let produto = multiplicacao(5, 10); // produto é 50
//console.log(`Resultado da multiplicação: ${produto}`); // Exibe: Resultado da multiplicação.
// Funções podem ser declaradas usando a sintaxe de arrow function.
const divisao = (a, b) => {
    return a / b;
}
let quociente = divisao(10, 2); // quociente é 5
//console.log(`Resultado da divisão: ${quociente}`); // Exibe o resultado da divisão.
// Javascript é uma linguagem de tipagem dinâmica, o que significa que as variáveis podem mudar de tipo durante a execução do programa.
let variavel = 10; // Inicialmente um Number
//console.log(`Tipo inicial: ${typeof variavel}`); // Exibe: Tipo inicial: number
variavel = "Agora sou uma String"; // Agora é uma String

//console.log(`Tipo após mudança: ${typeof variavel}`); // Exibe: Tipo após mudança: string
// Operadores aritméticos
let a = 10;
let b = 5;
let somaA = a + b; // Adição
let subtracao = a - b; // Subtração
let multiplicacao = a * b; // Multiplicação
let divisao = a / b; // Divisão
let modulo = a % b; // Módulo (resto da divisão)
let exponenciacao = a ** b; // Exponenciação (a elevado a b)
// Operadores de comparação
let igual = (a == b); // Igualdade (valor)
let identico = (a === b); // Identidade (valor e tipo)
let diferente = (a != b); // Diferença (valor)
let naoIdentico = (a !== b); // Não identidade (valor e tipo)
let maiorQue = (a > b); // Maior que
let menorQue = (a < b); // Menor que
let maiorOuIgual = (a >= b); // Maior ou igual
let menorOuIgual = (a <= b); // Menor ou igual
// Operadores lógicos
let e = (a > 5 && b < 10); // E lógico
let ou = (a > 5 || b < 3); // Ou lógico
let nao = !(a < b); // Não lógico
// Operadores de atribuição
let atribuicao = a; // Atribuição simples
let atribuicaoSoma = a += b; // Atribuição com adição (equivalente a a = a + b)
let atribuicaoSubtracao = a -= b; // Atribuição com subtração (equivalente a a = a - b)
let atribuicaoMultiplicacao = a *= b; // Atribuição com multiplicação (equivalente a a = a * b)
let atribuicaoDivisao = a /= b; // Atribuição com divisão (equivalente a a = a / b)
let atribuicaoModulo = a %= b; // Atribuição com módulo (equivalente a a = a % b)
let atribuicaoExponenciacao = a **= b; // Atribuição com exponenciação (equivalente a a = a ** b)
// Operadores de incremento e decremento
let incremento = ++a; // Incrementa a (prefixo)
let decremento = --b; // Decrementa b (prefixo)
// Incremento pós-fixo
let incrementoPos = a++; // Incrementa a (pós-fixo)
let decrementoPos = b--; // Decrementa b (pós-fixo)
// Operadores de string
let string1 = "Olá";
let string2 = "Mundo";
let concatenacao = string1 + " " + string2; // Concatenação de strings
let tamanhoString = string1.length; // Tamanho da string
let stringMaiuscula = string1.toUpperCase(); // Converte para maiúsculas
let stringMinuscula = string1.toLowerCase(); // Converte para minúsculas
let substring = string1.substring(0, 2); // Extrai uma substring (do índice 0 ao 2)
let inclui = string1.includes("Olá"); // Verifica se a string inclui uma substring
let indexOf = string1.indexOf("l"); // Retorna o índice da primeira ocorrência de uma substring
let replace = string1.replace("Olá", "Oi"); // Substitui uma substring por outra
let split = string1.split(" "); // Divide a string em um array usando um delimitador
let trim = string1.trim(); // Remove espaços em branco do início e do fim da string
// Operadores de bit a bit
let bitA = 5; // 0101 em binário
let bitB = 3; // 0011 em binário
let andBit = bitA & bitB; // AND bit a bit (resultado: 0001 em binário, que é 1 em decimal)
let orBit = bitA | bitB; // OR bit a bit (resultado: 0111 em binário, que é 7 em decimal)
let xorBit = bitA ^ bitB; // XOR bit a bit (resultado: 0110 em binário, que é 6 em decimal)
let notBit = ~bitA; // NOT bit a bit (inverte os bits, resultado: -6 em decimal, pois o complemento de 2 é usado)
let deslocamentoEsquerda = bitA << 1; // Deslocamento à esquerda (resultado: 1010 em binário, que é 10 em decimal)
let deslocamentoDireita = bitA >> 1; // Deslocamento à direita (resultado: 0010 em binário, que é 2 em decimal)
// Operadores ternários
let condicao = (a > b) ? "A é maior que B" : "B é maior ou igual a A"; // Operador ternário
// console.log(condicao);   // Exibe: A é maior que B
// Javascript é uma linguagem de programação orientada a objetos, baseada em protótipos. Isso significa que os objetos podem herdar propriedades e métodos de outros objetos.
// Objetos podem ser criados usando a notação de objeto literal, construtores de função, ou classes (a partir do ES6).
// Exemplo de criação de objeto usando notação de objeto literal
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    ligar: function() {
        console.log("Carro ligado");
    }
};