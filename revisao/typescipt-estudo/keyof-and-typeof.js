"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuario = void 0;
exports.exibirChaveUsuario = exibirChaveUsuario;
exports.verificarTipo = verificarTipo;
exports.exemploTypeof = exemploTypeof;
exports.exemploKeyof = exemploKeyof;
exports.exemploKeyofETypeof = exemploKeyofETypeof;
function exibirChaveUsuario(usuario, chave) {
    console.log("Valor da chave ".concat(chave, ": ").concat(usuario[chave]));
}
exports.usuario = {
    nome: "João",
    idade: 30,
    email: "algum@email.com"
};
exibirChaveUsuario(exports.usuario, "nome"); // Valor da chave nome: João
exibirChaveUsuario(exports.usuario, "idade"); // Valor da chave idade: 30
exibirChaveUsuario(exports.usuario, "email"); // Valor da chave email: 
// Typeof é usado para obter o tipo de uma variável ou expressão em tempo de execução.
function verificarTipo(valor) {
    if (typeof valor === "string") {
        return "O valor é uma string.";
    }
    else if (typeof valor === "number") {
        return "O valor é um número.";
    }
    else if (typeof valor === "boolean") {
        return "O valor é um booleano.";
    }
    else {
        return "Tipo desconhecido.";
    }
}
console.log(verificarTipo("Olá")); // O valor é uma string.
console.log(verificarTipo(42)); // O valor é um número.
console.log(verificarTipo(true)); // O valor é um booleano.
console.log(verificarTipo({})); // Tipo desconhecido.
// Typeof também pode ser usado para verificar o tipo de uma variável em tempo de execução,
// mas é importante lembrar que ele retorna uma string representando o tipo, como "string",
// "number", "boolean", etc. Isso é útil para depuração e validação de tipos em tempo de execução.
function exemploTypeof(valor) {
    console.log("O tipo do valor \u00E9: ".concat(typeof valor));
}
exemploTypeof("Texto"); // O tipo do valor é: string
exemploTypeof(123); // O tipo do valor é: number
exemploTypeof(true); // O tipo do valor é: boolean
exemploTypeof([1, 2, 3]); // O tipo do valor é: object
exemploTypeof({ chave: "valor" }); // O tipo do valor é: object
exemploTypeof(null); // O tipo do valor é: object
exemploTypeof(undefined); // O tipo do valor é: undefined
// Typeof é especialmente útil quando se trabalha com variáveis que podem ter diferentes tipos de dados,
// como em casos de union types ou quando se lida com dados dinâmicos.
// Ele permite que você verifique o tipo de uma variável em tempo de execução e tome decisões
// com base nesse tipo, garantindo que o código seja mais robusto e menos propenso a erros.
function exemploKeyof(objeto) {
    var chaves = Object.keys(objeto);
    console.log("As chaves do objeto s\u00E3o: ".concat(chaves.join(", ")));
}
var exemploObjeto = {
    nome: "Maria",
    idade: 25,
    profissao: "Desenvolvedora"
};
exemploKeyof(exemploObjeto); // As chaves do objeto são: nome, idade, profissao
// O operador keyof é útil para criar tipos dinâmicos baseados nas chaves de um objeto,
// permitindo que você crie funções e tipos que operam de forma segura com base nas chaves de um objeto.
// Isso é especialmente útil em situações onde você precisa garantir que as chaves usadas em uma função ou operação sejam válidas e existam no objeto.
// Ele ajuda a evitar erros de digitação e garante que o código seja mais seguro e fácil de manter.
function exemploKeyofETypeof(objeto) {
    var chaves = Object.keys(objeto);
    chaves.forEach(function (chave) {
        console.log("Chave: ".concat(String(chave), ", Tipo: ").concat(typeof objeto[chave]));
    });
}
var outroObjeto = {
    titulo: "Aprendendo TypeScript",
    ano: 2023,
    ativo: true
};
exemploKeyofETypeof(outroObjeto);
// Neste exemplo, a função exemploKeyofETypeof recebe um objeto e exibe suas chaves e os tipos dos valores correspondentes.
// Isso demonstra como o operador keyof pode ser combinado com typeof para criar funções que operam de forma segura com base nas chaves de um objeto,
// garantindo que as operações realizadas sejam válidas e seguras.
// Isso é especialmente útil em situações onde você precisa garantir que as chaves usadas em uma função ou operação sejam válidas e existam no objeto,
// ajudando a evitar erros de digitação e garantindo que o código seja mais seguro e fácil de manter.
// Além disso, o uso de keyof e typeof juntos permite que você crie funções que operam de forma dinâmica com base nas chaves
// de um objeto, tornando o código mais flexível e reutilizável.
