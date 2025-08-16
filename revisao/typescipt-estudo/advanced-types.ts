// Type Guard no Typescript é uma técnica que permite verificar o tipo de uma variável em tempo de execução, 
// garantindo que ela seja do tipo esperado antes de realizar operações com ela.
// Isso é especialmente útil quando se trabalha com tipos complexos ou union types, onde uma variável pode ter mais de um tipo possível.
// Exemplo de uso do Type Guard:
export class Pessoa {
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

export interface Produto {
    nome: string;
    preco: number;
    descricao?: string; // propriedade opcional
    readonly id: number; // propriedade somente leitura
    categoria: "Eletrônicos" | "Roupas" | "Alimentos"; // union type (string literal)
    tags: string[]; // array de strings
}

// A função exibirDetalhes recebe um parâmetro que pode ser do tipo Pessoa ou Produto e exibe detalhes de acordo com o tipo.
// Ela utiliza o Type Guard para verificar se o parâmetro é do tipo Pessoa ou Produto,
// garantindo que as propriedades corretas sejam acessadas sem causar erros em tempo de execução.
// Isso ajuda a evitar erros de tipo e torna o código mais seguro e fácil de entender.
// Type Guard é uma técnica poderosa que melhora a segurança de tipos em tempo de execução,
export function exibirDetalhes(pessoa: Pessoa | Produto): void {
  if ("idade" in pessoa) {
    // Verifica se a propriedade 'idade' existe, indicando que é do tipo Pessoa
    console.log(`Pessoa: ${pessoa.nome}, Idade: ${(pessoa as Pessoa).idade}`);
  } else {
    // Caso contrário, é do tipo Produto
    console.log(`Produto: ${pessoa.nome}, Preço: ${(pessoa as Produto).preco}`);
  }
}
let pessoa: Pessoa = new Pessoa("João", 30);
let produto: Produto = {
  nome: "Smartphone",
  preco: 1999.99,
  id: 1,
  categoria: "Eletrônicos",
  tags: ["Android", "5G", "128GB"],
};
exibirDetalhes(pessoa); // Exibe detalhes da pessoa
exibirDetalhes(produto); // Exibe detalhes do produto   
// Saída esperada:
//Pessoa: João, Idade: 30
//Produto: Smartphone, Preço: 1999.99

export function exemploTypeGuard(valor: number | string): void {
  if (typeof valor === "number") {
    console.log(`O valor é um número: ${valor}`);
  } else if (typeof valor === "string") {
    console.log(`O valor é uma string: ${valor}`);
  } else {
    console.log("Tipo desconhecido");
  }
}   
// Exemplo de uso do Type Guard:
exemploTypeGuard(42); // O valor é um número: 42
exemploTypeGuard("Olá"); // O valor é uma string: Olá
