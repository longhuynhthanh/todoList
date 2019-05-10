import React, { Component } from 'react';
class Item extends Component {
    showLevel(level){
        let elementLevel = <td className="text-center"><span className="badge badge-secondary">Small</span></td>;
        if(level === 1){
            elementLevel = <td className="text-center"><span className="badge badge-success">Small</span></td>;
        }else if(level === 2){
            elementLevel = <td className="text-center"><span className="badge badge-danger">Small</span></td>;
        }
        return elementLevel; 
    }
    handleEdit = (event) => {
        const id = event.target.value;
    }
    handleDelete = (event) => {
        const id = event.target.value;
        this.props.deleteTask(id);
    }
    render() {
        return (
            <tr>
                <td className="text-center">{this.props.STT}</td>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.name}</td>
                {this.showLevel(this.props.item.level)}
                <td>
                    <button onClick = {this.handleEdit} type="button" className="btn btn-warning" value = {this.props.item.id}>Edit</button>
                    <button onClick = {this.handleDelete} type="button" className="btn btn-danger" value = {this.props.item.id}>Delete</button>
                </td>
            </tr>
        );
    };
}

export default Item;