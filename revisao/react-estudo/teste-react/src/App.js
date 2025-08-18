import React from 'react';
import './App.css';
import Main from './components/Main'; // Importando o componente Main
// Em react, se usa PascalCase para nomear componentes. Se assemelha com classes em JavaScript. Até mesmo os arquivos devem ser nomeados com PascalCase.
/* eslint-disable react/jsx-no-comment-textnodes */

function App() {
  return (
    // JSX é uma sintaxe que permite escrever HTML dentro do JavaScript.
// JSX é uma extensão de sintaxe para JavaScript que permite escrever HTML dentro do Java
// JSX é usado para descrever como a interface de usuário deve parecer.
// JSX é uma sintaxe que permite escrever HTML dentro do JavaScript.
// JSX é uma extensão de sintaxe para JavaScript que permite escrever HTML dentro do JavaScript
    <div className="App testdiv">  
      {/* Comentário em JSX */}
      <h1>Olá, Mundo!</h1>
      <p>Este é o meu primeiro componente React.</p>
      <p>React é uma biblioteca JavaScript para construir interfaces de usuário.</p>
      <h1>Meu Primeiro App React!</h1>
      <p>Bem-vindo ao mundo do React.</p>
      <Main /> {/* Usando o componente Main dentro do App */}
    </div>
  )


}

export default App;
