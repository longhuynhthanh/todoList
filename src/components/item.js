import React, { Component } from 'react';
class Item extends Component {
    DeleteTask = () => {
        let id = this.props.task.id;
        this.props.DeleteTask(id);
    }
    EditTask = () => {
        const data = this.props.task;
        this.props.EditTask(data);
    }
    render() {
        const {task, index} = this.props;
        let elmLevel = <td className="text-center"><span className="badge badge-danger">High</span></td>;
        if(task.level === 0){
            elmLevel = <td className="text-center"><span className="badge badge-secondary">Small</span></td>;
        }else if(task.level === 1){
            elmLevel = <td className="text-center"><span className="badge badge-success">Medium</span></td>;
        }
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{task.id}</td>
                <td>{task.name}</td>
                {elmLevel}
                <td>
                    <button type="button" className="btn btn-warning" onClick = {this.EditTask}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick = {this.DeleteTask}>Delete</button>
                </td>
            </tr>
        );
    };
}

export default Item;