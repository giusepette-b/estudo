//Classes em JavaScript são uma forma de definir objetos e seus comportamentos.
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom() {
        console.log(`${this.nome} faz um som.`);
    }
}
// Herança permite que uma classe herde propriedades e métodos de outra classe.
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade); // Chama o construtor da classe pai
        this.raca = raca;
    }

    fazerSom() {
        console.log(`${this.nome} late.`);
    }
} 
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} ligado.`);
    }
}  
// Instanciando um objeto da classe Cachorro
let meuCachorro = new Cachorro("Rex", 5, "Labrador");
meuCachorro.fazerSom(); // Exibe: Rex late.
// A palavra reservada `this` refere-se ao objeto atual dentro do contexto da classe.
let carro = new Carro("Toyota", "Corolla");
console.log(carro.marca); // Exibe: Toyota
console.log(carro.modelo); // Exibe: Corolla
carro.ligar(); // Exibe: Carro ligado
// Funções em JavaScript são objetos de primeira classe, o que significa que podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Maria")); // Exibe: Olá, Maria!
// Interfaces em JavaScript não são uma característica nativa, mas podem ser simuladas usando classes ou objetos.
// Exemplo de interface simulada com uma classe
class ExemploInterface {
    metodoObrigatorio() {
        throw new Error("Este método deve ser implementado.");
    }
}
// Classe que implementa a interface
class ImplementacaoExemplo extends ExemploInterface {
    metodoObrigatorio() {
        console.log("Método implementado.");
    }
}
let exemplo = new ImplementacaoExemplo();
exemplo.metodoObrigatorio(); // Exibe: Método implementado.
// Exemplo de uso de classes e herança
class Veiculo {
    constructor(tipo, cor) {
        this.tipo = tipo;
        this.cor = cor;
    }

    info() {
        console.log(`Veículo: ${this.tipo}, Cor: ${this.cor}`);
    }
}
class Moto extends Veiculo {
    constructor(cor) {
        super("Moto", cor); // Chama o construtor da classe pai
    }

    info() {
        console.log(`Moto de cor ${this.cor}`);
    }
}
let minhaMoto = new Moto("vermelha");
minhaMoto.info(); // Exibe: Moto de cor vermelha
// Exemplo de uso de funções
function calcularArea(base, altura) {
    return (base * altura) / 2; // Retorna a área de um triângulo
}
console.log(calcularArea(5, 10)); // Exibe: 25
// Exemplo de uso de interfaces simuladas
class InterfaceExemplo {
    metodoObrigatorio() {
        throw new Error("Este método deve ser implementado.");
    }
}
class ImplementacaoInterface extends InterfaceExemplo {
    metodoObrigatorio() {
        console.log("Método implementado na classe filha.");
    }
}
let implementacao = new ImplementacaoInterface();
implementacao.metodoObrigatorio(); // Exibe: Método implementado na classe filha.
// Extends permite que uma classe herde propriedades e métodos de outra classe, facilitando a reutilização de código.
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade); // Chama o construtor da classe pai
        this.curso = curso;
    }

    apresentar() {
        super.apresentar(); // Chama o método da classe pai
        console.log(`Estou estudando ${this.curso}.`);
    }
}
let estudante = new Estudante("João", 20, "Engenharia");
estudante.apresentar(); // Exibe: Olá, meu nome é João e tenho 20 anos. Estou estudando Engenharia.
// Exemplo de uso de funções como objetos
function saudacaoPersonalizada(nome, saudacao = "Olá") {
    return `${saudacao}, ${nome}!`;
}
console.log(saudacaoPersonalizada("Maria")); // Exibe: Olá, Maria!
console.log(saudacaoPersonalizada("João", "Bom dia")); // Exibe: Bom dia, João!
// Implements não é uma palavra-chave em JavaScript, mas pode ser simulada usando classes e interfaces.É comum em TypeScript, que é um superconjunto de JavaScript.
// Em JavaScript, não há uma palavra-chave específica para "implements", mas podemos simular esse comportamento usando classes e verificando se uma classe implementa certos métodos ou propriedades.
class InterfaceExemplo {
    metodoObrigatorio() {
        throw new Error("Este método deve ser implementado.");
    }
}
class ImplementacaoInterface extends InterfaceExemplo {
    metodoObrigatorio() {
        console.log("Método implementado na classe filha.");
    }
}
let implementacaoInterface = new ImplementacaoInterface();
implementacaoInterface.metodoObrigatorio(); // Exibe: Método implementado na classe filha.
// Exemplo de uso de classes e herança com métodos
class Eletronico {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} está ligado.`);
    }
}
class Televisao extends Eletronico {
    constructor(marca, modelo, tamanho) {
        super(marca, modelo); // Chama o construtor da classe pai
        this.tamanho = tamanho;
    }

    ligar() {
        console.log(`Ligando a TV ${this.marca} ${this.modelo} de ${this.tamanho} polegadas.`);
    }
}
let minhaTV = new Televisao("Samsung", "QLED", 55);
minhaTV.ligar(); // Exibe: Ligando a TV Samsung QLED de 55 polegadas.
// Exemplo de uso de funções com parâmetros padrão
function calcularPreco(preco, desconto = 0) {
    return preco - (preco * desconto / 100);
}
console.log(calcularPreco(100)); // Exibe: 100 (sem desconto)
console.log(calcularPreco(100, 10)); // Exibe: 90 (com 10% de desconto)
// Exemplo de uso de classes e herança com métodos e propriedades
class Computador {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} está ligado.`);
    }
}
class Laptop extends Computador {
    constructor(marca, modelo, tamanhoTela) {
        super(marca, modelo); // Chama o construtor da classe pai
        this.tamanhoTela = tamanhoTela;
    }

    ligar() {
        console.log(`Ligando o laptop ${this.marca} ${this.modelo} com tela de ${this.tamanhoTela} polegadas.`);
    }
}
let meuLaptop = new Laptop("Dell", "XPS 13", 13);
meuLaptop.ligar(); // Exibe: Ligando o laptop Dell XPS 13 com tela de 13 polegadas.
// Exemplo de uso de funções com retorno
function calcularAreaRetangulo(base, altura) {
    return base * altura; // Retorna a área do retângulo
}
console.log(calcularAreaRetangulo(5, 10)); // Exibe: 50
// Exemplo de uso de classes e herança com métodos e propriedades
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    info() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
}
class Ebook extends Livro {
    constructor(titulo, autor, formato) {
        super(titulo, autor); // Chama o construtor da classe pai
        this.formato = formato;
    }

    info() {
        console.log(`Ebook - Título: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`);
    }
}
let meuEbook = new Ebook("JavaScript Avançado", "John Doe", " PDF");
meuEbook.info(); // Exibe: Ebook - Título: JavaScript Avançado, Autor: John Doe, Formato:  PDF
// Exemplo de uso de funções
function saudacaoCompleta(nome, saudacao = "Olá") {
    return `${saudacao}, ${nome}!`;
}
console.log(saudacaoCompleta("Maria")); // Exibe: Olá, Maria!
console.log(saudacaoCompleta("João", "Bom dia")); // Exibe: Bom dia, João!
// Exemplo de uso de classes e herança com métodos e propriedades
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    info() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`);
    }
}
class Geladeira extends Produto {
    constructor(nome, preco, capacidade) {
        super(nome, preco); // Chama o construtor da classe pai
        this.capacidade = capacidade;
    }

    info() {
        console.log(`Geladeira - Nome: ${this.nome}, Preço: R$${this.preco}, Capacidade: ${this.capacidade} litros`);
    }
}
let minhaGeladeira = new Geladeira("Brastemp", 2500, 400);
minhaGeladeira.info(); // Exibe: Geladeira - Nome: Brastemp, Preço: R$2500, Capacidade: 400 litros
// Exemplo de uso de funções com parâmetros padrão
function calcularDesconto(preco, desconto = 0) {
    return preco - (preco * desconto / 100); // Retorna o preço com desconto aplicado
}
console.log(calcularDesconto(100)); // Exibe: 100 (sem desconto)
console.log(calcularDesconto(100, 10)); // Exibe: 90 (com 10% de desconto)
// Exemplo de uso de classes e herança com métodos e propriedades
class Telefone {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} está ligado.`);
    }
}
class Smartphone extends Telefone {
    constructor(marca, modelo, sistemaOperacional) {
        super(marca, modelo); // Chama o construtor da classe pai
        this.sistemaOperacional = sistemaOperacional;
    }

    ligar() {
        console.log(`Ligando o smartphone ${this.marca} ${this.modelo} com ${this.sistemaOperacional}.`);
    }
}
let meuSmartphone = new Smartphone("Apple", "iPhone 13", "iOS");
meuSmartphone.ligar(); // Exibe: Ligando o smartphone Apple iPhone 13 com iOS.
