import React, { Component } from 'react';
import './Main.css'; // Importando o CSS específico para o componente Main
// Usando classes para criar componentes React é uma maneira tradicional de definir componentes com estado e métodos.
// No entanto, com a introdução dos Hooks no React 16.8, muitos desenvolvedores estão migrando para componentes funcionais com Hooks, 
// que oferecem uma maneira mais concisa e
// legível de gerenciar estado e efeitos colaterais.
// Não se usa mais a palavra-chave 'class' para definir componentes React, mas sim a palavra-chave 'function'.
// No entanto, ainda é possível usar classes para criar componentes React, especialmente se você estiver trabalhando
// com código legado ou se preferir a abordagem baseada em classes.
export default class Main extends Component {
    state = {
        message: 'Bem-vindo ao componente Main!',
        inputValue: ''
    }

    handleChange = (event) =>{

        this.setState({ 
            message: event.target.value,
            inputValue: event.target.value 
        });
    }
  
    render() {
    const { message } = this.state;

    return (
      <div className="main">
            <h1>Bem-vindo ao componente Main!</h1>
            {/* Você pode adicionar mais conteúdo ou componentes aqui */}
            <input
                onChange={this.handleChange}
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
