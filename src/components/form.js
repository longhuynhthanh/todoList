import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTask: '',
            level: 0 
        };
    }
    handleCancel = () => {
        this.props.closeForm();
    }
    handleInputChange = event => {
        this.setState({
            nameTask: event.target.value
        });
    }
    handleSelectChange = event => {
        this.setState({
            level: event.target.value
        });
        console.log(this.state.level);
    }
    addTask = () => {
        const name = this.state.nameTask;
        const level = this.state.level;
        if(this.props.editTask === false){
            this.props.AddTask(name, level);
        }else{
            const id = this.props.TaskEdit.id;
            this.props.editTaskEvent(id, name, level);
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <form method="POST" className="form-inline">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.nameTask} placeholder="Task Name" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <select name="ds" id="inputDs" className="form-control" required="required" value = {this.state.level} onChange={this.handleSelectChange}>
                                Small
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button onClick={this.addTask} type="button" className="btn btn-outline-success">Submit</button>
                        <button onClick={this.handleCancel} type="button" className="btn btn-outline-danger">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Form;