"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExemploClasse = void 0;
exports.exemploKeysComTipos = exemploKeysComTipos;
// Usar chaves com tipos em TypeScript é uma maneira de garantir que as chaves de um objeto correspondam a tipos 
// específicos, proporcionando maior segurança e previsibilidade no código.
function exemploKeysComTipos(objeto) {
    var chaves = Object.keys(objeto);
    chaves.forEach(function (chave) {
        console.log("Chave: ".concat(chave, ", Valor: ").concat(objeto[chave]));
    });
}
// Exemplo de uso:
var exemploObjeto = {
    nome: "Maria",
    idade: "30",
    cidade: "São Paulo"
};
exemploKeysComTipos(exemploObjeto);
// Neste exemplo, a função `exemploKeysComTipos` recebe um objeto onde as chaves são do tipo string e os valores também são do tipo string.
// A função itera sobre as chaves do objeto e exibe cada chave e seu valor.
// Isso demonstra como usar chaves com tipos em TypeScript para garantir que as chaves e valores
// de um objeto sejam do tipo esperado, proporcionando maior segurança e previsibilidade no código.
// Isso é especialmente útil em situações onde você precisa garantir que as chaves usadas em uma função ou operação sejam válidas e existam no objeto.
// Ele ajuda a evitar erros de digitação e garante que o código seja mais seguro e fácil de manter.
// Usando "this" com chaves e tipos em TypeScript
var ExemploClasse = /** @class */ (function () {
    function ExemploClasse() {
        this.dados = {};
    }
    ExemploClasse.prototype.adicionarDado = function (chave, valor) {
        this.dados[chave] = valor;
    };
    ExemploClasse.prototype.exibirDados = function () {
        var _this = this;
        var chaves = Object.keys(this.dados);
        chaves.forEach(function (chave) {
            console.log("Chave: ".concat(chave, ", Valor: ").concat(_this.dados[chave]));
        });
    };
    return ExemploClasse;
}());
exports.ExemploClasse = ExemploClasse;
// Exemplo de uso da classe ExemploClasse:
var exemplo = new ExemploClasse();
exemplo.adicionarDado("nome", "João");
exemplo.adicionarDado("idade", "25");
exemplo.exibirDados();
// Neste exemplo, a classe `ExemploClasse` usa chaves com tipos para armazenar
// dados em um objeto privado `dados`. O método `adicionarDado` permite adicionar
// chaves e valores ao objeto, enquanto o método `exibirDados` itera sobre
// as chaves e exibe cada chave e seu valor.
// Isso demonstra como usar "this" com chaves e tipos em TypeScript para garantir que
// as chaves e valores de um objeto sejam do tipo esperado, proporcionando maior segurança e previsibilidade no código.
// Isso é especialmente útil em situações onde você precisa garantir que as chaves usadas em
// uma função ou operação sejam válidas e existam no objeto.
// Ele ajuda a evitar erros de digitação e garante que o código seja mais seguro e fácil to manter.
// Além disso, o uso de classes permite encapsular a lógica relacionada aos dados, tornando o código mais organizado e modular.
// Isso é especialmente útil em projetos maiores, onde a organização do código é crucial para a manutenção e legibilidade.
// As classes também permitem a reutilização de código, pois você pode criar instâncias da classe e reutilizar seus métodos em diferentes partes do seu aplicativo.
// Isso ajuda
