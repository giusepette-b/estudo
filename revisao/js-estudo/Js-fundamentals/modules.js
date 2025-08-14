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
}