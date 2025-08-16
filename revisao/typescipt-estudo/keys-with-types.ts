// Usar chaves com tipos em TypeScript é uma maneira de garantir que as chaves de um objeto correspondam a tipos 
// específicos, proporcionando maior segurança e previsibilidade no código.
export function exemploKeysComTipos(objeto: { [key: string]: string }): void {
    const chaves = Object.keys(objeto);
    chaves.forEach((chave) => {
        console.log(`Chave: ${chave}, Valor: ${objeto[chave]}`);
    });
    }   
// Exemplo de uso:
const exemploObjeto = {
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
export class ExemploClasse {
    private dados: { [key: string]: string };

    constructor() {
        this.dados = {};
    }

    adicionarDado(chave: string, valor: string): void {
        this.dados[chave] = valor;
    }

    exibirDados(): void {
        const chaves = Object.keys(this.dados);
        chaves.forEach((chave) => {
            console.log(`Chave: ${chave}, Valor: ${this.dados[chave]}`);
        });
    }
}
// Exemplo de uso da classe ExemploClasse:
const exemplo = new ExemploClasse();
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
// Isso ajuda a evitar duplicação de código e torna o desenvolvimento mais eficiente.
// Em resumo, usar chaves com tipos em TypeScript, juntamente com o uso de "this" em classes, proporciona uma maneira poderosa
// de garantir a segurança e previsibilidade do código, além de melhorar a organização e modularidade
// do seu aplicativo. Isso é especialmente útil em projetos maiores, onde a manutenção e legibilidade
// do código são cruciais para o sucesso do desenvolvimento.
// Além disso, o uso de classes permite encapsular a lógica relacionada aos dados, tornando o código mais organizado e modular.
// Isso é especialmente útil em projetos maiores, onde a organização do código é crucial para a manutenção e legibilidade.
// As classes também permitem a reutilização de código, pois você
// pode criar instâncias da classe e reutilizar seus métodos em diferentes partes do seu aplicativo.
// Isso ajuda a evitar duplicação de código e torna o desenvolvimento mais eficiente.
// Em resumo, usar chaves com tipos em TypeScript, juntamente com o uso de "this" em classes, proporciona uma maneira poderosa
// de garantir a segurança e previsibilidade do código, além de melhorar a organização e modularidade
// do seu aplicativo. Isso é especialmente útil em projetos maiores, onde a manutenção e legibilidade
// do código são cruciais para o sucesso do desenvolvimento.
