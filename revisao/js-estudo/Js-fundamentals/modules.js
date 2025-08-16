//JavaScript é uma linguagem de programação baseada em protótipos, o que significa que objetos podem herdar propriedades e métodos de outros objetos.
// A palavra reservada exporta é usada para exportar módulos, funções ou variáveis de um arquivo JavaScript, permitindo que sejam importados em outros arquivos.
// Exemplo de exportação de uma função
export function saudacao(nome) {
    return `Olá, ${nome}!`;
}
// Exemplo de exportação de uma variável
export const PI = 3.14;
// Export serve para tornar o código modular, facilitando a reutilização e manutenção.
// Importando módulos, funções ou variáveis de outros arquivos JavaScript
import { saudacao, PI } from './fundamentals.js';
console.log(saudacao("João")); // Exibe: Olá, João!
        this.modelo = modelo;
    }
    ligar() {
        console.log(`${this.marca} ${this.modelo} está ligado.`);
    }
};
// A palavra reservada import é usada para importar módulos, funções ou variáveis de outros arquivos JavaScript, permitindo que sejam reutilizados.
// Em relação ao escopo, a palavra reservada "this" refere-se ao contexto atual de um objeto ou classe, permitindo acessar suas propriedades e métodos.
// Exemplo de uso do "this" em uma classe
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    ligar() {
        console.log(`${this.marca} ${this.modelo} está ligado.`);
    }
}
const meuCarro = new Carro("Toyota", "Corolla");
meuCarro.ligar(); // Exibe: Toyota Corolla está ligado.
// Importando a classe Carro de outro arquivo
import { Carro } from './carro.js';
const meuCarro = new Carro("Toyota", "Corolla");
meuCarro.ligar(); // Exibe: Toyota Corolla está ligado.
// A palavra reservada class é usada para definir uma classe em JavaScript, que é um modelo para criar objetos com propriedades e métodos compartilhados.
// Se tratar de escopo, a palavra reservada "this" refere-se ao contexto atual de um objeto ou classe, permitindo acessar suas propriedades e métodos.
// Outras palavras que definem escopo de classe são: constructor, super, static, extends, get, set.
// A Palavra "super" é usada para chamar o construtor ou métodos da classe pai em uma classe que estende outra classe.
// Exemplo de uso do "super" em uma classe que herda de outra
class Escola {
    constructor(nome) {
        this.nome = nome;
    }
    apresentar() {
        console.log(`Bem-vindo à escola ${this.nome}.`);
    }
}
class Aluno extends Escola {
    constructor(nome, curso) {
        super(nome); // Chama o construtor da classe pai (Escola)
        this.curso = curso;
    }
    apresentar() {
        super.apresentar(); // Chama o método apresentar da classe pai
        console.log(`Eu sou um aluno do curso de ${this.curso}.`);
    }
}
const aluno1 = new Aluno("Escola ABC", "Matemática");
aluno1.apresentar();
// Exibe:
// Bem-vindo à escola Escola ABC.
// Eu sou um aluno do curso de Matemática.
// A palavra reservada extends é usada para criar uma classe que herda propriedades e métodos de outra classe em JavaScript.
// Para proteger o código de alterações acidentais, é comum usar a palavra reservada "static" para definir métodos ou propriedades que pertencem à classe em si, e não a instâncias específicas da classe.
// Exemplo de uso do "static" em uma classe
class Calculadora {
    static somar(a, b) {
        return a + b;
    }
    static subtrair(a, b) {
        return a - b;
    }
}
console.log(Calculadora.somar(5, 3)); // Exibe: 8
console.log(Calculadora.subtrair(10, 4)); // Exibe: 6
// A palavra reservada "get" é usada para definir um método que pode ser acessado como uma propriedade, permitindo que você obtenha um valor sem precisar chamar uma função.
// Exemplo de uso do "get" em uma classe
class Eletronico {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    get descricao() {
        return `${this.nome} custa R$${this.preco}.`;
    }
}
const celular = new Eletronico("Celular", 1500);
console.log(celular.descricao); // Exibe: Celular custa R$1500.
// A palavra reservada "set" é usada para definir um método que pode ser usado para definir um valor, permitindo que você modifique uma propriedade de um objeto de forma controlada.
// Exemplo de uso do "set" em uma classe
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    set atualizarPreco(novoPreco) {
        if (novoPreco > 0) {
            this.preco = novoPreco;
        } else {
            console.log("Preço inválido.");
        }
    }
}
const produto = new Produto("Notebook", 2500);
produto.atualizarPreco = 3000; // Atualiza o preço para 3000
console.log(produto.preco); // Exibe: 3000
produto.atualizarPreco = -500; // Exibe: Preço inválido.
// Os campos gerados por classes são propriedades que são definidas diretamente na classe, sem a necessidade de um construtor explícito. Eles são 
// úteis para definir propriedades padrão ou inicializar valores.


