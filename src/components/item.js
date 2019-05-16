import React, { Component } from 'react';
import {connect} from 'react-redux';
import {DeleteTask, CloseForm, SelectedItem, OpenForm} from './../Actions/index';

class Item extends Component {
    DeleteTask = () => {
        let id = this.props.task.id;
        this.props.DeleteTask(id);
    }
    SelectedItem = () => {
        this.props.OpenForm();
        this.props.SelectedItem(this.props.task);
    }
    render() {
        const {task, index} = this.props;
        let elmLevel = <td className="text-center align-middle"><span className="badge badge-danger">High</span></td>;
        if(task.level === 0){
            elmLevel = <td className="text-center align-middle"><span className="badge badge-secondary">Small</span></td>;
        }else if(task.level === 1){
            elmLevel = <td className="text-center align-middle"><span className="badge badge-success">Medium</span></td>;
        }
        return (
            <tr>
                <td className="text-center align-middle">{index + 1}</td>
                <td><img src={task.imageURL} className="img-thumbnail" alt="Cinque Terre" width="200" height="100" /></td>
                <td className="align-middle">{task.id}</td>
                <td className="align-middle">{task.name}</td>
                {elmLevel}
                <td className="align-middle">
                    <button type="button" className="btn btn-warning" onClick = {this.SelectedItem}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick = {this.DeleteTask}>Delete</button>
                </td>
            </tr>
        );
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        DeleteTask: (id) => {
            dispatch(DeleteTask(id));
        },
        CloseForm: () => {
            dispatch(CloseForm());
        }, 
        SelectedItem: (task) => {
            dispatch(SelectedItem(task));
        },
        OpenForm: () => {
            dispatch(OpenForm());
        }
    };
};
export default connect(null, mapDispatchToProps)(Item);