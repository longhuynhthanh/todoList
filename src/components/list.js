import React, { Component } from 'react';
import Item from './item';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let items = this.props.items;
        let element = items.map((item, index) => {
            return <Item 
                        key = {index}
                        STT = {index + 1}
                        item = {item}
                        editTask = {this.props.editTask}
                        deleteTask = {this.props.deleteTask}
                    />;
        });
        return (
            <div className="panel panel-success mx-auto">
                <div className="panel-heading">List Task</div>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }} className="text-center">#</th>
                            <th>ID</th>
                            <th>Task</th>
                            <th style={{ width: '20%' }} className="text-center">Level</th>
                            <th style={{ width: '20%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {element}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default List;