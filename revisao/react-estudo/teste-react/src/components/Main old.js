import React, { Component } from 'react';
// Criação de componente React com estado.
export default class Main extends Component {
    constructor(props){
        super(props);
        // Aqui você pode inicializar o estado do componente, se necessário
        this.state = {
            // Exemplo de estado inicial
            message: 'Bem-vindo ao componente Main!',
            inputValue: '' 
            
        };
        this.mudamsg = this.mudamsg.bind(this);
        // O bind é usado para garantir que o 'this' dentro do método mudamsg
        // se refira à instância correta do componente.
        // Isso é necessário porque, por padrão, os métodos de classe não são vinculados ao
        // contexto da instância, o que pode levar a erros quando você tenta acessar o estado
        // ou outros métodos do componente dentro do método mudamsg.
        // Se você estiver usando funções de seta, o bind não é necessário.
        // No entanto, se você estiver usando métodos de classe tradicionais, como neste exemplo,
        // o bind é necessário para garantir que o 'this' se refira corretamente à instância do componente.
        // Isso é especialmente importante quando você passa o método como um manipulador de eventos,
        // como no caso do onChange do input.
        // O bind é uma maneira de vincular o contexto do método ao componente atual.
        // Isso garante que o método tenha acesso ao estado e às propriedades do componente.

    }

    mudamsg(event) {
        // Atualiza o estado com o valor do input
        this.setState({ 
            message: event.target.value,
            inputValue: event.target.value // Atualiza ambos os estados
        });
    }
  
    render() {
    const { message } = this.state;
    // Desestruturação do estado para obter a mensagem
    // Isso permite que você acesse a mensagem diretamente sem precisar usar this.state.message.
    // A desestruturação é uma maneira conveniente de extrair valores de objetos ou arrays.
    // Neste caso, estamos extraindo a propriedade 'message' do estado do componente.
    return (
      <div className="main">
            <h1>Bem-vindo ao componente Main!</h1>
            {/* Você pode adicionar mais conteúdo ou componentes aqui */}
            <input
                onChange={this.mudamsg}
                type="text"
                placeholder="Digite algo aqui"
                value={this.state.inputValue}
            />
            <button type="submit">Enviar</button>
            <p>Este é um exemplo de componente React com estado.</p>
            <p>Você pode adicionar lógica e interatividade aqui.</p>
            <p>{message}</p>
      </div>
    );
  }
}
