import React, { Component } from 'react';
import './Main.css'; 
// Form
import { FaEdit, FaPlus, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
    state = {
        tasks: [],
        task: 'Campo para adicionar uma tarefa',
        inputValue: ''
    };
    componentDidMount() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Recupera as tarefas do localStorage
        this.setState({ tasks }); // Define o estado com as tarefas recuperadas
    }
    // componentDidUpdate é chamado sempre que o componente é atualizado
    // Aqui, vamos salvar as tarefas no localStorage sempre que o estado de tarefas mudar
    // Isso garante que as tarefas sejam persistidas mesmo após o recarregamento da página
    // Isso é útil para manter as tarefas salvas mesmo que o usuário feche o navegador
    // ou recarregue a página
    // O localStorage é uma forma de armazenar dados no navegador do usuário
    // O localStorage é uma forma de armazenar dados no navegador do usuário
    componentDidUpdate(prevProps, prevState) {
        const { tasks } = this.state;
        if (prevState.tasks !== tasks) {
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Salva as tarefas no localStorage  
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { task, tasks } = this.state;

        if (tasks.indexOf(task) !== -1 || task.trim() === '') {
            alert('Tarefa já existe ou está vazia!');
            return;
        }
        this.setState({
            tasks: [...tasks, task],
            task: '',
            inputValue: ''
        });
    }

    handleChange = (event) => {
        this.setState({ 
            task: event.target.value,
            inputValue: event.target.value 
        });
    }

    handleEdit = (e, index) => {
        // Implemente a edição aqui quando precisar
        e.preventDefault();
        const { tasks } = this.state;
        const newTask = prompt('Editar tarefa:', tasks[index]);
        if (newTask && newTask.trim() !== '') { // Verifica se o usuário digitou algo
            const newTasks = tasks.map((task, i) => (i === index ? newTask : task)); // Mapeia as tarefas, substituindo a tarefa editada
            this.setState({ tasks: newTasks });
        }
        // Se o usuário cancelar o prompt, nada acontece
        // Se o usuário digitar uma string vazia, nada acontece
        // Se o usuário digitar uma string válida, a tarefa é atualizada
        // Se o usuário digitar uma string que já existe, nada acontece
    }

    handleRemove = (e, index) => {
        e.preventDefault();
        const { tasks } = this.state;
        const newTasks = tasks.filter((_, i) => i !== index); // Filtra removendo o item do índice
        this.setState({ tasks: newTasks }); // Atualiza o estado corretamente
    }
    
    render() {
        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>
                <form action="#" onSubmit={this.handleSubmit} className="form">
                    <input
                        onChange={this.handleChange}
                        type="text"
                        className="input"
                        placeholder="Digite algo aqui"
                        value={this.state.inputValue}
                    />
                    <button type="submit" className="submit"><FaPlus/></button>
                </form>
                <ul className="task-list">
                    {this.state.tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <span>
                                <FaEdit 
                                    onClick={(e) => this.handleEdit(e, index)}
                                    className="edit"
                                />
                                <FaWindowClose 
                                    onClick={(e) => this.handleRemove(e, index)}
                                    className="remove"
                                />
                            </span>
                        </li>
                    ))}
                </ul>
                <p>Você tem {this.state.tasks.length} tarefas pendentes.</p>
            </div>
        );
    }
}