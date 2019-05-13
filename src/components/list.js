import React, { Component } from 'react';
import Item from './item';
class List extends Component {
    render() {
        let {tasks, DeleteTask, EditTask} = this.props;
        let showTasks = tasks.map((task, index) => {
            return <Item
                        key = {task.id}
                        index = {index}
                        task= {task}
                        DeleteTask = {DeleteTask}
                        EditTask = {EditTask}
                    />
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
                        {showTasks}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default List;