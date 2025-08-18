//Funções assincrônicas em JavaScript são usadas para lidar com operações que podem levar algum tempo para serem concluídas, como requisições de rede ou leitura de arquivos.
export async function buscarDados(url) {
    try {
        let resposta = await fetch(url); // Espera pela resposta da requisição
        if (!resposta.ok) {
            throw new Error('Erro na requisição: ' + resposta.statusText);
        }
        let dados = await resposta.json(); // Espera pela conversão dos dados para JSON
        return dados; // Retorna os dados obtidos
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
    }
}
// Seu funcionamento é semelhante ao de uma função normal, mas permite o uso da palavra-chave `await` para esperar por promessas.
// Exemplo de uso da função assíncrona
async function exibirDados() {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // URL de exemplo
    const dados = await buscarDados(url); // Chama a função assíncrona e espera pelos dados
    console.log(dados); // Exibe os dados obtidos
}
// Chama a função para exibir os dados
// exibirDados();
// A palavra-chave `async` é usada para declarar uma função assíncrona, e `await` é usada para esperar pela resolução de uma promessa dentro dessa função.
// Funções assíncronas sempre retornam uma promessa, que pode ser resolvida com o valor retornado pela função ou rejeitada com um erro. 
// Isso facilita o tratamento de operações assíncronas de forma mais legível e estruturada em comparação com o uso direto de promessas com `.then()` e `.catch()`.// Exemplo de função assíncrona que retorna uma promessa resolvida
async function exemploSimples() {
    return "Função assíncrona concluída!";
}   
exemploSimples().then(mensagem => console.log(mensagem)); // Exibe: Função assíncrona concluída!    
// Exemplo de função assíncrona que lança um erro
async function exemploErro() { 
    throw new Error("Algo deu errado!");
}
exemploErro().catch(erro => console.error(erro.message)); // Exibe: Algo deu errado!
// Isso demonstra como funções assíncronas podem ser usadas para lidar com operações que podem falhar, utilizando o tratamento de erros com `try...catch` ou o método `.catch()` em promessas.
