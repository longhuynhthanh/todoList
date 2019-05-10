import React, { Component } from 'react';
class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectItem: ''
        };
    }
    showLevel(level){
        let elementLevel = <td className="text-center"><span className="badge badge-secondary">Small</span></td>;
        if(level === 1){
            elementLevel = <td className="text-center"><span className="badge badge-success">Medium</span></td>;
        }else if(level === 2){
            elementLevel = <td className="text-center"><span className="badge badge-danger">High</span></td>;
        }
        return elementLevel; 
    }
    handleEdit = () => {
        if(this.props.editTask === false){
            this.setState({
                selectItem: 'bg-light'
            });
            this.props.showFormEditTask(this.props.item);
        }
    }
    handleDelete = (event) => {
        const id = event.target.value;
        this.props.deleteTaskEvent(id);
    }
    render() {
        return (
            <tr className={this.props.editFinish ? '' : this.state.selectItem}>
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