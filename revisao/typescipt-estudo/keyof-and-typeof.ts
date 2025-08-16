// Keyof é um operador em TypeScript que retorna um tipo que é a união de todas as chaves de um tipo dado. É útil para criar tipos 
// dinâmicos baseados nas chaves de um objeto.
// Typeof é um operador que retorna o tipo de uma variável ou expressão. É útil para verificar o tipo de uma variável em tempo de execução.
// Exemplo de uso do keyof e typeof:
export interface Usuario {
  nome: string;
  idade: number;
  email: string;
}
export type ChavesUsuario = keyof Usuario; // "nome" | "idade" | "email"
export function exibirChaveUsuario(usuario: Usuario, chave: ChavesUsuario): void {
  console.log(`Valor da chave ${chave}: ${usuario[chave]}`);
}  
export const usuario: Usuario = {
  nome: "João",
  idade: 30,
  email: "algum@email.com"
};
exibirChaveUsuario(usuario, "nome"); // Valor da chave nome: João
exibirChaveUsuario(usuario, "idade"); // Valor da chave idade: 30
exibirChaveUsuario(usuario, "email"); // Valor da chave email: 
// Typeof é usado para obter o tipo de uma variável ou expressão em tempo de execução.
export function verificarTipo(valor: any): string {
  if (typeof valor === "string") {
    return "O valor é uma string.";
  } else if (typeof valor === "number") {
    return "O valor é um número.";
  } else if (typeof valor === "boolean") {
    return "O valor é um booleano.";
  } else {
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
export function exemploTypeof(valor: any): void {
  console.log(`O tipo do valor é: ${typeof valor}`);
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
export function exemploKeyof(objeto: any): void {
  const chaves = Object.keys(objeto) as (keyof typeof objeto)[];
  console.log(`As chaves do objeto são: ${chaves.join(", ")}`);
}
const exemploObjeto = {
  nome: "Maria",
  idade: 25,
  profissao: "Desenvolvedora"
};
exemploKeyof(exemploObjeto); // As chaves do objeto são: nome, idade, profissao
// O operador keyof é útil para criar tipos dinâmicos baseados nas chaves de um objeto,
// permitindo que você crie funções e tipos que operam de forma segura com base nas chaves de um objeto.
// Isso é especialmente útil em situações onde você precisa garantir que as chaves usadas em uma função ou operação sejam válidas e existam no objeto.
// Ele ajuda a evitar erros de digitação e garante que o código seja mais seguro e fácil de manter.
export function exemploKeyofETypeof(objeto: any): void {
  const chaves = Object.keys(objeto) as (keyof typeof objeto)[];
  chaves.forEach((chave) => {
    console.log(`Chave: ${String(chave)}, Tipo: ${typeof objeto[chave]}`);
  });
}
const outroObjeto = {
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

