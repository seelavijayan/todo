import React, { Component } from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

const tasks = localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')) : [];

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: tasks
        };
    }

    //Create Task
    createTask = (task) => {
        if (task.trim === '') {
            alert('Task Cannot Be Empty')
            return;
        }
        tasks.push({
            task, isCompleted: false
        });
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    //Toggle Task
    toggleTask = (taskId) => {
        const taskItem = tasks[taskId];
        taskItem.isCompleted = !taskItem.isCompleted
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    //Delete Task
    deleteTask = (taskId) => {
        tasks.splice(taskId, 1);
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    //Edit Task
    editTask = (taskId, task) => {
        const taskItem = tasks[taskId];
        taskItem.task = task;
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    render() {
        return (
            <div className="main">
                <h1>Todos</h1>
                <div className="content">
                    <CreateTask
                        createTask={this.createTask} />
                    <br />
                    <TaskList
                        tasks={this.state.tasks}
                        deleteTask={this.deleteTask}
                        editTask={this.editTask}
                        toggleTask={this.toggleTask} />
                </div>
            </div>
        );
    }
}



export default Main;