import React, { Component } from 'react';
class Add extends Component {

    ShowForm = () => {
        this.props.ShowForm();
    }
    render() {
        const {nameEditTask} = this.props;
        return (
            <div className="col-5">
                <button type="button" className="btn btn-danger btn-block btn-block" onClick = {this.ShowForm}>{nameEditTask === '' ? 'Add Task' : 'Edit Task: ' + nameEditTask}</button>
            </div>
        );
    }
}
export default Add;