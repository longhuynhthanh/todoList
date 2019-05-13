import React, { Component } from 'react';
import Title from './components/title';
import Controls from './components/controls';
import Form from './components/form';
import List from './components/list';
import Tasks from './models/tasks';

const id = require('uuid/v4');

class App extends Component {
  constructor(drops) {
    super(drops);
    this.state = {
      tasks: Tasks,
      isShowForm: false,
      editTask: null,
    };
  }
  ShowForm = () => {
    this.setState({
      isShowForm: !this.state.isShowForm,
    });
  }
  AddTask = (data) => {
    let newTasks = this.state.tasks;
    if (data) {
      if (data.id === '') {
        // Add Task
        data.id = id();
        newTasks.push(data);
        this.setState({
          tasks: newTasks
        });
      } else {
        // Edit Task
        const index = newTasks.findIndex(task => task.id === data.id);
        newTasks[index] = data;
        this.setState({
          tasks: newTasks,
          editTask: null
        });
      }
    } else {
      console.log('data null');
    }
  }
  DeleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks,
      editTask: null,
      isShowForm: false
    });
  }
  EditTask = (data) => {
    this.setState({
      isShowForm: true,
      editTask: data
    });
  }
  onSearch = (search) => {
    let newTasks = [];
    Tasks.forEach(task => {
      if (task.name.toUpperCase().includes(search.toUpperCase())) {
        newTasks.push(task);
      }
    });
    this.setState({
      tasks: newTasks
    });
  }
  render() {
    let { tasks, isShowForm, editTask } = this.state;
    let ShowForm = isShowForm ? <Form
      AddTask={this.AddTask}
      editTask={editTask}
    /> : '';
    return (
      <div className="container">
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Controls
          ShowForm={this.ShowForm}
          nameEditTask={editTask ? editTask.name : ''}
          onSearch={this.onSearch}
        />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/* FORM : START */}
        {ShowForm}
        {/* FORM : END */}
        {/* LIST : START */}
        <List
          tasks={tasks}
          DeleteTask={this.DeleteTask}
          EditTask={this.EditTask}
        />
        {/* LIST: END */}
      </div>
    );
  }
}

export default App;
