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
      items: Tasks,
      showForm: false,
      strSearch: '',
      editTask: false,
      editFinish: false,
      TaskEdit: {
        name: '',
        level: 0,
      }
    };
  }
  showFormToggle = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  closeForm = () => {
    this.setState({
      showForm: false
    });
  };
  handleSearch = (value) => {
    const newTasks = [];
    Tasks.forEach(task => {
      if (task.name.toUpperCase().includes(value.toUpperCase())) {
        newTasks.push(task);
      }
    });
    this.setState({
      items: newTasks,
      strSearch: ''
    });
  }
  addTask = (name, level) => {
    Tasks.push({id: id(), name: name, level: level});
    this.setState({
      items: Tasks
    });
  }
  showFormEditTask = (task) => {
    this.setState({
      editTask: true,
      showForm: true,
      TaskEdit: task,
      editFinish: false
    });
  }
  editTaskEvent = (id, name, level) => {
    const index = this.state.items.findIndex(item => item.id === id);
    const newTasks = this.state.items;
    newTasks[index].name = name; 
    newTasks[index].level = level;
    this.setState({
      items: newTasks,
      editTask: false,
      editFinish: true
    });
  }
  deleteTaskEvent = (id) => {
    const newTasks = this.state.items.filter(task => task.id !== id);
    this.setState({
      items: newTasks
    });
  }
  render() {
    let items = this.state.items;
    let showForm = this.state.showForm;
    let elementShowForm = <div></div>;
    if (showForm) {
      elementShowForm = <Form closeForm={this.closeForm}
                              AddTask = {this.addTask}
                              editTask = {this.state.editTask}
                              TaskEdit = {this.state.TaskEdit}
                              editTaskEvent = {this.editTaskEvent}
                        />;
    }

    return (
      <div className="container">
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Controls onClickAdd={this.showFormToggle}
          showForm={showForm}
          Search={this.handleSearch}
          editTask = {this.state.editTask}
          nameEditTask = {this.state.TaskEdit.name} />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/* FORM : START */}
        {elementShowForm}
        {/* FORM : END */}
        {/* LIST : START */}
        <List
          items = {items}
          showFormEditTask = {this.showFormEditTask}
          deleteTaskEvent = {this.deleteTaskEvent}
          editTask = {this.state.editTask}
          editFinish = {this.state.editFinish} />
        {/* LIST: END */}
      </div>
    );
  }
}

export default App;
