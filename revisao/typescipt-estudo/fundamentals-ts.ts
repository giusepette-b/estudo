//typescript é um superconjunto do javascript - isso significa que todo código js é um código ts válido
//typescript é uma linguagem de tipagem estática - isso significa que os tipos são verificados em tempo de compilação
//typescript é uma linguagem de tipagem forte - isso significa que os tipos não são convertidos implicitamente  
// Typescript funciona baseado em tipos que são definidos em tempo de desenvolvimento, ou seja, antes do código ser executado.
// O Typescript é transpilado para Javascript, ou seja, o código Typescript é convertido para Javascript antes de ser executado.
// O Typescript é mantido pela Microsoft e é um projeto open source.
// Para configurar o Typescript em um projeto, é necessário criar um arquivo tsconfig.json na raiz do projeto, Instalar o Typescript como dependência de desenvolvimento (npm install typescript --save-dev) e compilar o código com o comando tsc.
// Para compilar o código Typescript, é necessário ter o Node.js instalado na máquina e utilizar o comando tsc no terminal.
// Exemplo de código Typescript:   
let nome: string = "João"; // string 
let idade: number = 30; // number
let isAdmin: boolean = true; // boolean
let dataNascimento: Date = new Date("1993-01-01"); // Date
let salario: number | string = 2000.5; // union type (number ou string)
salario = "2000"; // agora salario é uma string
let nota: any = 10; // any (pode ser qualquer tipo) (any deve ser evitado ao máximo, para essa situação é melhor usar union type ou unknown)
let hobbies: string[] = ["Cozinhar", "Praticar Esportes"];
let endereco: { rua: string; numero: number; cidade: string } = {
  rua: "Rua dos Pinheiros",
  numero: 1293,
  cidade: "São Paulo",
  
}; // object
let id: number | string; // union type (number ou string)
id = 10; // id é number
id = "10"; // id é string   
let valores: (number | string)[] = [1, "2", 3, "4"]; // array de number ou string
let notas: Array<number> = [8, 6, 5, 9]; // array de number (outra forma de declarar array)
// Arrays em Typescript são homogêneos, ou seja, só aceitam um tipo de dado. Para aceitar mais de um tipo, é necessário usar union type.
// Array é um objeto do Javascript, por isso é possível utilizar os métodos do Array em Typescript.
// Tuplas em Typescript são arrays com tamanho e tipos fixos.
let tupla: [string, number, boolean] = ["João", 30, true]; // tupla (array com tamanho e tipos fixos)
let funcionario: { nome: string; idade: number; isAdmin?: boolean } = {
  nome: "Maria",
  idade: 25,
}; // object com propriedade opcional (isAdmin?)
// Interfaces em Typescript são usadas para definir a estrutura de um objeto. Elas são semelhantes aos tipos, mas são mais flexíveis e podem ser estendidas.
export interface Produto {
  nome: string;
  preco: number;
  descricao?: string; // propriedade opcional   
    readonly id: number; // propriedade somente leitura 
    categoria: "Eletrônicos" | "Roupas" | "Alimentos"; // union type (string literal)
    tags: string[]; // array de strings
}
// A interface Produto define a estrutura de um objeto que representa um produto, com propriedades como nome, preço, descrição (opcional), id (somente leitura), categoria (com valores específicos) e tags (array de strings).
// Interfaces podem ser estendidas, ou seja, uma interface pode herdar as propriedades de outra interface.
// Exemplo de uso da interface Produto:
let produto: Produto = {
  nome: "Smartphone",
  preco: 1999.99,
  id: 1,
  categoria: "Eletrônicos",
  tags: ["Android", "5G", "128GB"],
};
console.log(produto);
// Classes em Typescript são usadas para definir objetos com propriedades e métodos. Elas são semelhantes às classes em outras linguagens de programação.
class Pessoa {
  nome: string;
  idade: number;
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}
// A classe Pessoa define um objeto que representa uma pessoa, com propriedades como nome e idade, e um método apresentar que retorna uma string com a apresentação da pessoa.
// Exemplo de uso da classe Pessoa:
let pessoa1 = new Pessoa("Carlos", 28);